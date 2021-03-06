# nodejs-longpoll-udp
Longpoll server that listens to UDP dgrams in realtime (concept)

![Screenshot](/demo.jpg?raw=true "Screenshot")

# prerequirements:
* npm (https://www.npmjs.com/package/npm)
* netcat (for windows you can use for example https://github.com/diegocr/netcat)

# usage
```
git clone https://github.com/denisix/nodejs-longpoll-udp
cd nodejs-longpoll-udp
npm install
npm start
```

then open http://localhost:8080 in your browser

start netcat in your linux console and connect to this udp server (netcat should be installed to be able to do this):

```nc -u 127.0.0.1 500```

type something + Enter and you will see the result in your browser

# files
```
server.js - the main program to check the concept (server-side)
index.html - this file will be provided to browser (client-side)
jquery-1.5.min.js - jquery library to make life easier
```

# dependencies
* express-longpoll - long-poll nodejs plugin from https://www.npmjs.com/package/express-longpoll
* hexdump - client-side rendering plugin from http://mephux.github.io/hexdump.js/
