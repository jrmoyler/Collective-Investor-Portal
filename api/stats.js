const investors = require('./data/investors.json');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const total = investors.length;

  const qualified = investors.filter(i =>
    ['Qualified', 'Outreach Ready', 'Contacted', 'Replied', 'Meeting Scheduled',
     'In Diligence', 'Partner Review', 'Soft Interest', 'Potential Investment']
    .includes(i.pipelineStage)
  ).length;

  const outreachReady = investors.filter(i =>
    i.pipelineStage === 'Outreach Ready' || i.outreachReadinessScore >= 70
  ).length;

  const contacted = investors.filter(i =>
    ['Contacted', 'Replied', 'Meeting Scheduled', 'In Diligence',
     'Partner Review', 'Soft Interest', 'Potential Investment']
    .includes(i.pipelineStage)
  ).length;

  const replied = investors.filter(i =>
    ['Replied', 'Meeting Scheduled', 'In Diligence',
     'Partner Review', 'Soft Interest', 'Potential Investment']
    .includes(i.pipelineStage)
  ).length;

  const meetings = investors.filter(i =>
    ['Meeting Scheduled', 'In Diligence', 'Partner Review',
     'Soft Interest', 'Potential Investment']
    .includes(i.pipelineStage)
  ).length;

  const potentialInvestment = investors.filter(i =>
    i.pipelineStage === 'Potential Investment'
  ).length;

  const fitScores = investors.map(i => i.fitScore).filter(s => s > 0);
  const aiScores = investors.map(i => i.aiScore).filter(s => s > 0);
  const avgFit = fitScores.length ? Math.round(fitScores.reduce((a, b) => a + b, 0) / fitScores.length) : 0;
  const avgAi = aiScores.length ? Math.round(aiScores.reduce((a, b) => a + b, 0) / aiScores.length) : 0;

  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const recentlyVerified = investors.filter(i => {
    if (!i.lastVerified) return false;
    return new Date(i.lastVerified) >= thirtyDaysAgo;
  }).length;

  return res.status(200).json({
    total,
    qualified,
    outreachReady,
    contacted,
    replied,
    meetings,
    potentialInvestment,
    avgFit,
    avgAi,
    recentlyVerified
  });
};
