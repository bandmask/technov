FROM mhart/alpine-node

WORKDIR /usr/src/app

RUN apk add --no-cache npm

COPY server/package.json ./
COPY server/package-lock.json ./
COPY server/server.js ./

RUN npm install

ADD frontend/dist ./web

EXPOSE 49160
ENTRYPOINT npm run start