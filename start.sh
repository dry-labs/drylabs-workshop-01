#!/bin/bash -e

SCRIPT_BIN="$(dirname $(readlink -f $0))"

if [ ! -d $SCRIPT_BIN/server/.venv ]
then
    docker-compose -p workshop run --rm server poetry install
fi

if [ ! -d $SCRIPT_BIN/client/node_modules ]
then
    docker-compose -p workshop run --rm client npm install
fi

for SERVICE in postgres server client nginx
do
    docker-compose -p workshop up -d $SERVICE
    sleep 2
done

docker-compose -p workshop run --rm server poetry run python manage.py migrate
