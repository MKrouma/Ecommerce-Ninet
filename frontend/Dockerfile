# LAYER 1 : REACT

FROM node AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# RUN npm test - if you want to test before to build
RUN npm run build


# LAYER 2 : NGINX
FROM nginx:alpine AS prod

# Define nginx config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
EXPOSE 80
# Run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]































# ==== CONFIGURE =====
# # Use a Node 16 base image
# FROM node:16-alpine as builder

# # Set the working directory to /app inside the container
# WORKDIR /app

# # Copy app files
# COPY . .

# # ==== BUILD =====
# # Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# RUN npm ci 

# # Build the app
# RUN npm run build

# # # ==== RUN =======
# # # Set the env to "production"
# # ENV NODE_ENV production

# # # Expose the port on which the app will be running (3000 is the default that `serve` uses)
# # EXPOSE 3000

# # # Start the app
# # CMD [ "npx", "serve", "build" ]


# # Bundle static assets with nginx
# FROM nginx:1.21.4-alpine as production
# ENV NODE_ENV production

# # Add your nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*

# # Copy built assets from `builder` image
# COPY --from=builder /app/build .
# # COPY --from=builder /app/build /usr/share/nginx/html

# # Expose port
# EXPOSE 80

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]