FROM node:16-alpine

WORKDIR ./customerService



RUN npm i
COPY . .
EXPOSE 8080

CMD [ "node", "server.js" ]
