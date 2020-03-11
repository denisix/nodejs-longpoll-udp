FROM node:12-alpine

WORKDIR /srv
COPY *.js index.html package.json /srv/

EXPOSE 500/udp
EXPOSE 8080

RUN npm i
CMD node server.js
