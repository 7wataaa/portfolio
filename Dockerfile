FROM node:16-alpine

RUN apk update && apk add git less

WORKDIR /app

COPY . .

RUN yarn