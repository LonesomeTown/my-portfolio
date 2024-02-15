# Add Build Args
ARG UPSTASH_REDIS_REST_URL
ARG UPSTASH_REDIS_REST_TOKEN

# Use the Node.js base image
FROM node:latest

RUN echo "UPSTASH_REDIS_REST_URL=${UPSTASH_REDIS_REST_URL}"
RUN echo "UPSTASH_REDIS_REST_TOKEN=${UPSTASH_REDIS_REST_TOKEN}"

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the relevant files and directories to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Set the command to start the node server
CMD ["npm", "start"]

