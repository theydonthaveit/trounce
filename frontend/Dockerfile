FROM alpine:latest

LABEL Auther="Alan Williams"

RUN apk update
RUN wget https://github.com/elm/compiler/releases/download/0.19.0/binaries-for-linux.tar.gz
RUN tar xzf binaries-for-linux.tar.gz
RUN mv elm /usr/local/bin/

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Make port 80 available to the world outside this container
EXPOSE 3000

# TODO - CMD to run the application