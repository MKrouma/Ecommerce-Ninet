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
sudo docker run -p 3000:3000 -d dockerized-react

# Notice we're now mapping port 80 inside the container 
# to port 3000 on the host machine!
sudo docker run -p 3000:80 -d dockerized-react

# stop container
sudo docker ps
sudo docker stop {CONTAINER_ID}







# 2. Dockerize django app
sudo docker build ./backend/. -t dockerized-django
sudo docker images | grep dockerized-django
sudo docker run -p 8000:8000 -d dockerized-django