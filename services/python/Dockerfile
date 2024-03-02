# syntax=docker/dockerfile:1.4
FROM --platform=$BUILDPLATFORM python:3.10-alpine AS builder

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt /app
RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r requirements.txt

COPY . /app

# Create the ENV variables
ENV HOST="0.0.0.0"
ENV PORT=6000

EXPOSE 6000

ENTRYPOINT ["python3", "server.py"]

