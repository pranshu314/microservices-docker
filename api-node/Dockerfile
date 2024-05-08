FROM node:19.6-bullseye-slim

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

USER node

COPY --chown=node:node ./src/ .

CMD [ "node", "index.js" ]
