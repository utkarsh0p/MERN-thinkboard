import ratelimit from '../src/config/upstash.js';

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit('notes-api-call-limit');
    if (!success) {
      console.log('rate limit exceeded mittar');
      return res.status(429).json({ message: 'Rate limit exceeded' });
    }
    next();
  } catch (err) {
    console.log('rate limit error', err);
    res.status(429).send({ message: 'Rate limit error' });
  }
};

export default rateLimiter;
