# 1. Dockerize react app

# Dockerignore file
// .dockerignore
frontend/node_modules
frontend/build

# Build the Docker image for the current folder 
# and tag it with `dockerized-react`
sudo docker build ./frontend/. -t dockerized-react

# Check the image was created
sudo docker images | grep dockerized-react

# Run the image in detached mode 
# and map port 3000 inside the container with 3000 on current host
sudo docker run -dit -p 3000:80 dockerized-react

# stop container
sudo docker ps
sudo docker stop {CONTAINER_ID}







# 2. Dockerize django app
sudo docker build . -t dockerized-django-dev
sudo docker images | grep dockerized-django-dev
sudo docker run --env-file .env.dev -p 8000:8000 -d dockerized-django-dev 

sudo docker build -f ./Dockerfile.prod -t dockerized-django . 
sudo docker run --env-file .env.prod -p 8000:8000 -d dockerized-django 





# 3. Docker compose
sudo docker compose run --rm  certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d ninetshopping.com
sudo docker compose run --rm  certbot certonly --webroot --webroot-path /var/www/certbot/ -d ninetshopping.comyoursite.com
sudo docker compose run --rm certbot renew

sudo docker-compose --env-file .env.dev up --build (dev)
sudo docker-compose up --build (dev)
sudo docker-compose -f docker-compose.prod.yml up -d --build (prod)