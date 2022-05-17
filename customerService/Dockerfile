FROM node:16-alpine
WORKDIR /
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY . .

RUN npm install --force
# If you are building your code for production
# RUN npm ci --only=production


EXPOSE 8080

CMD [ "node", "server.js" ]
