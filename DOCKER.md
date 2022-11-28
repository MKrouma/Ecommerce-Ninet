# Dockerize app

# Dockerignore file
// .dockerignore
frontend/node_modules
frontend/build

# Build the Docker image for the current folder 
# and tag it with `dockerized-react`
sudo docker build . -t dockerized-react
sudo docker build . -t dockerized-react-nginx

# Check the image was created
sudo docker images | grep dockerized-react

# Run the image in detached mode 
# and map port 3000 inside the container with 3000 on current host
sudo docker run -p 3000:3000 -d dockerized-react

# Notice we're now mapping port 80 inside the container 
# to port 3000 on the host machine!
sudo docker run -p 3005:80 -d dockerized-react-nginx

# stop container
sudo docker ps
sudo docker stop {CONTAINER_ID}