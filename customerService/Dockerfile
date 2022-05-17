FROM node:16-alpine
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


EXPOSE 8080

CMD [ "node", "server.js" ]
