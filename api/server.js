const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const investorsHandler = require('./investors');
const investorByIdHandler = require('./investors/[id]');
const statsHandler = require('./stats');
const eventsHandler = require('./events');
const emailsHandler = require('./emails');
const researchHandler = require('./research');

app.all('/api/investors/:id', (req, res) => {
  req.query = req.query || {};
  req.query.id = req.params.id;
  investorByIdHandler(req, res);
});
app.all('/api/investors', investorsHandler);
app.all('/api/stats', statsHandler);
app.all('/api/events', eventsHandler);
app.all('/api/emails', emailsHandler);
app.all('/api/research', researchHandler);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Collective AI Investor Portal running on http://localhost:${PORT}`);
});
