#!/bin/sh

docker build -t nodejs-longpoll-udp .

docker run -p 500:500/udp -p 8080:8080 -d nodejs-longpoll-udp

echo
echo "Open browser at http://ip-address:8080 and perform a test using netcat:"
echo "echo reply-me | nc -u ip-address 500"
