# syntax=docker/dockerfile:1.4
# FROM python:3.10-alpine
FROM python:3.10

# Prevents Python from writing pyc files.
# ENV PYTHONDONTWRITEBYTECODE=1

# Keeps Python from buffering stdout and stderr to avoid situations where
# the application crashes without emitting any logs due to buffering.
ENV PYTHONUNBUFFERED=1

RUN mkdir /app
# ADD . /app/
WORKDIR /app

COPY ./requirements.txt /app
# COPY . .
# COPY . /app
COPY ./ /app

# RUN pip install -r /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.cache/pip to speed up subsequent builds.
# Leverage a bind mount to requirements.txt to avoid having to copy them into
# into this layer.
# RUN --mount=type=cache,target=/root/.cache/pip \
#     --mount=type=bind,source=requirements.txt,target=requirements.txt \
#     python -m pip install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["python3", "server.py"]
# CMD ["python", "server.py", "runserver", "0.0.0.0:5000"]
