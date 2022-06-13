FROM node:14

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.mjs"]
