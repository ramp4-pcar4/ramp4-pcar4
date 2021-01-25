FROM node:14.15.4-alpine as install_rush
WORKDIR /app

RUN npm install -g @microsoft/rush@5.36.1
RUN apk add --no-cache git
RUN git config --global core.filemode false

FROM install_rush as update_packages
WORKDIR /app

COPY rush.json .
COPY common/config/rush/ common/config/rush/
COPY packages/ramp-core/package.json packages/ramp-core/
COPY packages/ramp-geoapi/package.json packages/ramp-geoapi/
COPY packages/ramp-locale-loader/package.json packages/ramp-locale-loader/
COPY packages/ramp-sample-fixtures/package.json packages/ramp-sample-fixtures/
RUN rush update

FROM install_rush

COPY --from=update_packages /app /app
EXPOSE 8080