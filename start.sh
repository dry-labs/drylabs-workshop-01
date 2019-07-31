#!/bin/bash -e

for SERVICE in postgres server client nginx
do
    docker-compose -p workshop up -d $SERVICE
    sleep 2
done

docker-compose -p workshop run --rm server poetry run python manage.py migrate
