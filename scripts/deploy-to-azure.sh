#!/bin/bash
az login -u $AZ_LOGIN_NAME -p $AZ_PASSWORD --service-principal --tenant $AZ_TENANT > /dev/null 2>&1

DESTDIR="demo"
# tags and branches from the upstream repo go into separate folders
if [ "$GITHUB_REPOSITORY" == "ramp4-pcar4/ramp4-pcar4" ]; then
    if [ "$IS_TAG" = true ]; then
        DESTDIR="$DESTDIR/tags/$REF_NAME"
    else
        DESTDIR="$DESTDIR/branches/$REF_NAME"
    fi
else
    # builds from fork branches go into corresponding user folders
    DESTDIR="$DESTDIR/users/$GITHUB_ACTOR/$REF_NAME"
fi

az storage blob delete-batch --source \$web --account-name $AZ_STORAGE_ACCOUNT --pattern "$DESTDIR/*" > /dev/null 2>&1
az storage blob upload-batch --account-name $AZ_STORAGE_ACCOUNT -d "\$web/$DESTDIR" -s "dist" > /dev/null 2>&1