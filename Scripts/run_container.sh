#!/bin/bash

image_name="react-portfolio:dev"
image_id=$(docker image inspect --format '{{.Id}}' "$image_name")

containers_using_image=$(docker container inspect $(docker container ls -aq) \
  --format "{{ if eq .Image \"$image_id\" }}{{.Id}}{{end}}" \
  | egrep -v '^$')

# Remove containers using the old image 
if [[ -n "$containers_using_image" ]]; then
  echo "Removing $containers_using_image"
  docker rm -f $(echo "$containers_using_image")
else
  echo "No containers are using the $image_name image. Skipping..."
fi

# Remove old image to prevent <none>
echo "Removing old Image"
docker rmi react-portfolio:dev

# Build new image
echo "building new image..."
docker build -t react-portfolio:dev ./app

# Run container
echo "Running...."
docker run --name react-portfolio -it -p 3000:3000 react-portfolio:dev