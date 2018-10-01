FROM node:10-alpine

LABEL Auther="Alan Williams"

WORKDIR /app
COPY . /app

RUN apk update \
    && apk add yarn

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]