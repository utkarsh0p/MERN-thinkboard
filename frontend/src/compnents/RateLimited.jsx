import React from 'react';

const RateLimited = () => {
  return (
    <div>
      <div className="flex flex-col text-center border-2 border-primary rounded-lg">
        <h2 className="font-bold">Rate limit reached</h2>
        <div>
          <p className="text-primary font-sans">
            Sorry bro you have reached the rate limit of sending the request
            please try again in some time it will work do not worry peace out .
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimited;
