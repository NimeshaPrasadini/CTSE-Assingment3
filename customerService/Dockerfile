FROM node:16-alpine
WORKDIR /customerService

COPY ["package.json", "./"]

RUN npm i
EXPOSE 8080

CMD [ "node", "server.js" ]
