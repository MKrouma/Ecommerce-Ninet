#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $DATABASE_HOST $DATABASE_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
    echo "migrate & collectstatic"
    python manage.py migrate --noinput
    python manage.py collectstatic --no-input --clear
fi

if [ "$DOCKER_COMPOSE" = "0" ]
then
    echo "Waiting for postgres..."
    gunicorn backend.wsgi:application --bind 0.0.0.0:8000
else
    exec "$@"
fi

# exec "$@"