FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

ADD . /app/

CMD ["npm", "start"]