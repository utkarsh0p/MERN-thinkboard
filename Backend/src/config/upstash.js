import {Redis} from '@upstash/redis'
import {Ratelimit} from '@upstash/ratelimit'
import dotenv from 'dotenv'
dotenv.config()

const ratelimit = new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(20,'10s')
});

export default ratelimit