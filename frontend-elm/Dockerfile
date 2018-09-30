FROM alpine:latest

LABEL Auther="Alan Williams"

RUN apk update \
    && wget https://github.com/elm/compiler/releases/download/0.19.0/binaries-for-linux.tar.gz \
    && tar xzf binaries-for-linux.tar.gz \
    && mv elm /usr/local/bin/ \
    && apk add yarn

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

RUN yarn add webpack webpack-dev-server elm-webpack-loader file-loader \
    && yarn add style-loader css-loader url-loader foreman ace-css@1.1 \
    && yarn add font-awesome@4 json-server@0.9.5 \
    && yarn add -D webpack-cli \
    && elm install elm-lang/html

# Make port 80 available to the world outside this container
EXPOSE 3000

CMD ["yarn", "start"]