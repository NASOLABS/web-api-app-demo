# syntax=docker/dockerfile:1.4
# FROM python:3.10-alpine
FROM python:3.10

ENV PYTHONUNBUFFERED 1

RUN mkdir /app
# ADD . /code/
WORKDIR /app

# COPY requirements.txt .
COPY ./requirements.txt /app

# COPY . /app
# COPY . .
COPY ./ /app

# RUN pip install -r /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Create the ENV variables
# ENV HOST="0.0.0.0"
# ENV PORT=5000

EXPOSE 5000

# # CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# # CMD ["npm", "start"]
# # ENTRYPOINT ["python3", "server.py"]
CMD ["python", "server.py", "runserver", "0.0.0.0:5000"]