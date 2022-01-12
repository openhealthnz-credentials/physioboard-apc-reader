#!/usr/bin/sh
docker build -t lambda-service .
echo "Live at http://localhost:9000/2015-03-31/functions/function/invocations"
docker run -p 9000:8080 lambda-service
