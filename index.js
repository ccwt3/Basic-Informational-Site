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
  res.writeHead(200, { 'content-type': 'text/html' });
  if (request.url === '/') {
    fs.readFile(directory.index, 'utf-8', (err, data) => {    
      if (err) {
        res.end();
        return 500;
      } else {
        res.write(data);
        res.end()
      }
    })
  }
  else if (request.url === '/about') {
    fs.readFile(directory.about, 'utf-8', (err, data) => {    
      if (err) {
        res.end();
        return 500;
      } else {
        res.write(data);
        res.end()
      }
    })
  }
  else if (request.url === '/contact-me') {
    fs.readFile(directory.contact, 'utf-8', (err, data) => {    
      if (err) {
        res.end();
        return 500;
      } else {
        res.write(data);
        res.end()
      }
    })
  }
  else {
    fs.readFile(directory.notFound, 'utf-8', (err, data) => {    
      if (err) {
        res.end();
        return 500;
      } else {
        res.write(data);
        res.end()
      }
    })
  }
})

server.listen(8080);