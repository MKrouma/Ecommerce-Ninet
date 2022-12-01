# pull official base image
FROM python:3.10-slim-buster

RUN apt-get update

# Add dependcies for pyscopg2, which django uses to connect to postgres sql database
RUN apt-get install -y --no-install-recommends libpq-dev gcc python3-dev
RUN apt install -y netcat

# Remove all the unecessary packages installed by the update command
RUN rm -rf /var/lib/apt/lists/*
RUN pip install --upgrade pip

# Add new user so we don't run pip as root
RUN adduser --disabled-login worker
USER worker

WORKDIR /home/worker/app/
# RUN mkdir /home/worker/app/static
COPY --chown=worker:worker ["backend/*.py", "backend/"]
COPY --chown=worker:worker ["backend/templates", "backend/templates"]
COPY --chown=worker:worker ["manage.py", "requirements.txt", "./"]

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy entrypoint.sh
COPY ./backend/entrypoint.sh .

# Run entrypoint.sh
# RUN chmod 500 entrypoint.sh
ENTRYPOINT ["/home/worker/app/entrypoint.sh"]

