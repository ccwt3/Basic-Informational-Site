import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Página principal
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'pages') });
});

// Página "About"
app.get('/about', (req, res) => {
  res.sendFile('about.html', { root: path.join(__dirname, 'pages') });
});

// Página "Contact"
app.get('/contact-me', (req, res) => {
  res.sendFile('contact-me.html', { root: path.join(__dirname, 'pages') });
});

// Página 404 (para todo lo demás)
app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: path.join(__dirname, 'pages') });
});

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
