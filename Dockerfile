FROM node:14.15.4-alpine as base_install
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
RUN npm install -g @microsoft/rush@5.36.1 \
    && apk add --no-cache bash git \
    && git config --global core.filemode false

FROM base_install as rush_update
WORKDIR /home/node/r4mp
COPY --chown=1000 . .
RUN rush update

# Keep cached content out of the final image
FROM base_install
WORKDIR /home/node/r4mp
COPY --chown=1000 --from=rush_update /home/node/r4mp /home/node/r4mp

ENTRYPOINT ["/home/node/r4mp/common/scripts/docker-entrypoint.sh"]