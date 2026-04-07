const investors = require('./data/investors.json');

let investorData = [...investors];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(investorData);
  }

  if (req.method === 'PATCH') {
    const url = req.url || '';
    const idMatch = url.match(/\/api\/investors\/(\d+)/);
    if (!idMatch) {
      return res.status(400).json({ error: 'Missing investor ID' });
    }
    const id = parseInt(idMatch[1], 10);
    const idx = investorData.findIndex(inv => inv.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: 'Investor not found' });
    }

    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
    }

    investorData[idx] = { ...investorData[idx], ...body };
    return res.status(200).json(investorData[idx]);
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
