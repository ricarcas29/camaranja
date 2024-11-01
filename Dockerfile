# Use the official Node.js image as the base image
FROM node:18

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application using pnpm
RUN pnpm run build

# Expose the port the app runs on (CapRover expects port 80)
EXPOSE 80

# Start the application using pnpm
CMD ["pnpm", "start"]