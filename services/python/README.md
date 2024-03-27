
To test 

Inside Docker
Python root
curl --location 'http://127.0.0.1:5000/'

Python Health in sub file
curl --location 'http://127.0.0.1:5000/health'

From Host 
Python root
curl --location 'http://127.0.0.1:6000/'

Python Health in sub file
curl --location 'http://127.0.0.1:6000/health'

docker system prune 

docker build -t apidemo-python .

$ lsof -P -i :5000
Python 6847 IPv4 TCP localhost:5000 (LISTEN)

$ netstat -nlp | grep 5000
tcp 0 0 127.0.0.1:5000 0.0.0.0:* LISTEN 6847/python

set FLASK_RUN_PORT=8000
docker run -it -p 8000:8000 apidemo-python  

namachi@macbook-pro python % python3 --version
Python 3.12.2

# docker run -it -p 8000:5000 apidemo-python  

docker run -p 127.0.0.1:6000:5000 -it apidemo-python 

% python3 -m venv .venv
% 
% source .venv/bin/activate
% 
% which python
% deactivate

docker network create mybridge \
  -o "com.docker.network.bridge.host_binding_ipv4=127.0.0.1"

`docker compose up --build` .


It is important to run the docker with multiple network access or restrict based on ip address. 

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
