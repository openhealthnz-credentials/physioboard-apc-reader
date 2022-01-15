FROM node:14-alpine
RUN mkdir -p /usr/src/app
COPY ./docker-service  /usr/src/app

WORKDIR /usr/src/app

# Not using a frozen lockfile to ensure it's using the latest version
# of the service
RUN yarn install
CMD [ "yarn", "start" ]  
