FROM node:18.0-alpine

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package*.json .

RUN npm install

COPY . .

USER node

CMD [ "node", "index.js" ]