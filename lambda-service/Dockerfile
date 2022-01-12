FROM public.ecr.aws/lambda/nodejs:latest
COPY app.js lambda.js package.json  ${LAMBDA_TASK_ROOT}/

# Install NPM dependencies for function
RUN npm install yarn -g
RUN yarn --frozen-lockfile 

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "lambda.handler" ]  
