const researchTasks = [];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(researchTasks);
  }

  if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
    }
    const task = {
      id: researchTasks.length + 1,
      ...body,
      status: body.status || 'queued',
      createdAt: new Date().toISOString()
    };
    researchTasks.push(task);
    return res.status(201).json(task);
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
