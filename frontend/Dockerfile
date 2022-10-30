FROM arm32v6/node:alpine

WORKDIR /usr/src/app

RUN apk add --no-cache npm

COPY server/package.json ./
COPY server/package-lock ./
COPY server/server.js ./

RUN npm install

ADD frontend/dist ./

EXPOSE 49160
CMD ["npm", "run start"]