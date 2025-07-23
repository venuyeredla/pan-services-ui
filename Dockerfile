FROM node:20-alpine3.17 AS builder
ENV NODE_ENV=production

# Create app directory and set it as the working directory
WORKDIR /usr/src/app

COPY . .

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#Install dependencies
RUN npm install

# Now copy the rest of your app
COPY . .

# If you are building your code for production
RUN npm run build


FROM openresty/openresty:alpine-fat 
# Use an official OpenResty image

# Remove default NGINX config if you're replacing it entirely
RUN rm /usr/local/openresty/nginx/conf/nginx.conf

WORKDIR /usr/share/app

# Copy your custom NGINX configuration
COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf


# Copy your static UI files
COPY --from=builder /usr/src/app/build/. ./

# Expose port 80
EXPOSE 80

# The default CMD of the OpenResty image starts NGINX