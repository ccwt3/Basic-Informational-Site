import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer();

let data;

server.on('request', (request, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });

  if (request.url === '/' || request.url === '/favicon.ico') {
    data = fs.readFileSync('C:/Users/cacaw/Documents/Visual_studio/Fullstack-Course/NODE JS/Basic Project/index.html', 'utf8');
  }
  else if (request.url === '/about') {
    data = fs.readFileSync('C:/Users/cacaw/Documents/Visual_studio/Fullstack-Course/NODE JS/Basic Project/about.html', 'utf-8');
  }
  else if (request.url === '/contact-me') {
    data = fs.readFileSync('C:/Users/cacaw/Documents/Visual_studio/Fullstack-Course/NODE JS/Basic Project/contact-me.html', 'utf-8');
  }
  else {
    data = fs.readFileSync('C:/Users/cacaw/Documents/Visual_studio/Fullstack-Course/NODE JS/Basic Project/404.html', 'utf-8');
  }

  res.write(data);
  res.end();
})

server.listen(8080);