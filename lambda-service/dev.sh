#!/usr/bin/sh
docker build -t lambda-service .
docker run -p 9000:8080 lambda-service
