const express = require('express');
const router = express.Router();

const API_KEY = "MSZwjV6XKK4t5pvURvC7";

const apiKeyAuthMiddleware = (req, res, next) => {
  const apiKey = req.headers['api-key']; 
  if(apiKey === null || apiKey === undefined){
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const decodedApiKey = Buffer.from(apiKey, 'base64').toString('utf-8');
  if (!decodedApiKey || decodedApiKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

router.use(apiKeyAuthMiddleware);

module.exports = router;