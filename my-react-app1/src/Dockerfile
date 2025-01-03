# Stage 1: Build the app
FROM node:18 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:1.23-alpine

# Copy the build output to nginx's default html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 8080

# Start nginx
CMD ["npm", "start"]
