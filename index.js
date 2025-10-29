import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer();
const directory = {
  index: 'C:/Users/cacaw/Documents/Visual_studio/Fullstack-Course/NODE JS/Basic Project/index.html',
  about: 'C:/Users/cacaw/Documents/Visual_studio/Fullstack-Course/NODE JS/Basic Project/about.html',
  contact: 'C:/Users/cacaw/Documents/Visual_studio/Fullstack-Course/NODE JS/Basic Project/contact-me.html',
  notFound: 'C:/Users/cacaw/Documents/Visual_studio/Fullstack-Course/NODE JS/Basic Project/404.html',
}

server.on('request', (request, res) => {
  if (request.url === '/') {
    handleRequest('index', res, 200);
  }
  else if (request.url === '/about') {
    handleRequest('about', res, 200);
  }
  else if (request.url === '/contact-me') {
    handleRequest('contact', res, 200);
  }
  else {
    handleRequest('notFound', res, 404);
  }
})

server.listen(8080);

function handleRequest(key, res, code) {
  fs.readFile(directory[key], 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'content-type': 'text/html' });
      res.end();
      return 500;
    } else {
      res.writeHead(code, { 'content-type': 'text/html' });
      res.write(data);
      res.end();
    }
  })
}