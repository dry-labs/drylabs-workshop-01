#!/bin/bash -e

docker-compose -p workshop down
docker container prune -f
docker volume prune -f
docker network prune -f
docker image prune -f
