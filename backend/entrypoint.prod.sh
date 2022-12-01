#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $DATABASE_HOST $DATABASE_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

if [ "$DOCKER_COMPOSE" = "0" ]
then
    echo "Waiting for postgres..."
    gunicorn backend.wsgi:application --bind 0.0.0.0:8000
else
    exec "$@"
fi

# exec "$@"