FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait ./wait
RUN dir
RUN chmod +x ./wait
COPY . .
RUN npm install