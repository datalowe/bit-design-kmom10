# Use a base image that includes Node.js
FROM node:21.6 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application
RUN env $(grep -v '^#' .docker.env | xargs -d '\n') npm run build_with_customhref

# Use a lightweight image for serving the application
FROM nginx:alpine


# Copy the built files from the previous stage
COPY --from=build /app/dist/browser /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
