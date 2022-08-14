FROM node:16 AS BUILD

WORKDIR /app

COPY ./svelte/package.json ./
COPY ./svelte/package-lock.json ./
COPY ./svelte ./

RUN npm install 


RUN npm run build

EXPOSE 3000

CMD ["node", "./build"]
