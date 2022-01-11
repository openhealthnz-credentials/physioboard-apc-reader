FROM public.ecr.aws/lambda/nodejs:latest
COPY app.js package.json  ${LAMBDA_TASK_ROOT}/

# Install NPM dependencies for function
# RUN npm ci 

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.handler" ]  
