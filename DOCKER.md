# Dockerize app

# Dockerignore file
// .dockerignore
frontend/node_modules
frontend/build

# Build the Docker image for the current folder 
# and tag it with `dockerized-react`
sudo docker build . -t dockerized-react

# Check the image was created
sudo docker images | grep dockerized-react

# Run the image in detached mode 
# and map port 3000 inside the container with 3000 on current host
sudo docker run -p 3000:3000 -d dockerized-react