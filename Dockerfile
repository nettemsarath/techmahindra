
FROM node:12

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install

COPY backend/ .
#ENV NODE_ENV=production

EXPOSE 4000

CMD ["npm","start"]
