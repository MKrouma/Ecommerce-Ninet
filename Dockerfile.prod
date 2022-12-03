###########
# BUILDER #
###########

# pull official base image
FROM python:3.10-slim-buster as builder

# set work directory
WORKDIR /home/worker/app/

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Add dependcies for pyscopg2, which django uses to connect to postgres sql database
RUN apt-get update && \
    apt-get install -y --no-install-recommends libpq-dev gcc python3-dev && \
    apt install -y netcat

# Remove all the unecessary packages installed by the update command
RUN rm -rf /var/lib/apt/lists/*

# Linting
RUN pip install --upgrade pip && \
    pip install flake8
COPY . .
# RUN flake8 --ignore=E501,F401 ./backend/

# Install dependencies
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /home/worker/app/wheels -r requirements.txt


#########
# FINAL #
#########

# pull official base image
FROM python:3.10-slim-buster

# create directory for the app user
RUN mkdir -p /home/app

# create the app user
# RUN addgroup -S app && adduser -S app -G app
# RUN addgroup -g 1001 -S app && app -u 1001 -S app -G app 
ARG USERNAME=app
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    #
    # [Optional] Add sudo support. Omit if you don't need to install software after connecting.
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/web
RUN mkdir $APP_HOME && mkdir $APP_HOME/static
WORKDIR $APP_HOME

# install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends libpq-dev gcc python3-dev && \
    apt install -y netcat
COPY --from=builder /home/worker/app/wheels /wheels
COPY --from=builder /home/worker/app/requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache /wheels/*

# copy entrypoint.prod.sh
COPY ./backend/entrypoint.prod.sh ./backend/
RUN chmod 500 ./backend/entrypoint.prod.sh

# copy project
# Copy files
COPY . $APP_HOME

# chown all the files to the app user
RUN chown -R app:app $APP_HOME

# change to the app user
USER app

# run entrypoint.prod.sh
ENTRYPOINT ["/home/app/web/backend/entrypoint.prod.sh"]