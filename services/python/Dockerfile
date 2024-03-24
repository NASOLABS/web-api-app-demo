# syntax=docker/dockerfile:1.4
# FROM python:3.10-alpine
FROM python:3.10

ENV PYTHONUNBUFFERED 1

RUN mkdir /app
WORKDIR /app

COPY ./requirements.txt /app

# COPY . /app
# COPY . .
COPY ./ /app

RUN pip install -r /app/requirements.txt

# Create the ENV variables
ENV HOST="0.0.0.0"
ENV PORT=6000

EXPOSE 6000

ENTRYPOINT ["python3", "server.py"]

