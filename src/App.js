import React from 'react';
import { UserInfo } from './UserInfo';
import './App.css';

const App = () => {
  const data = [
    {
      id: 1,
      name: 'Jason Bourne',
      provider: 'United Health',
      priceEstimates: [
        {
          plan: 'standard',
          priceEstimate: 91,
        },
        {
          plan: 'premium',
          priceEstimate: 121,
        },
      ],
    },
    {
      id: 2,
      name: 'James Bond',
      provider: 'United Health',
      priceEstimates: [
        {
          plan: 'standard',
          priceEstimate: 90,
        },
        {
          plan: 'premium',
          priceEstimate: 120,
        },
      ],
    },
    {
      id: 3,
      name: 'Ethan Hunt',
      provider: 'Distributed Health',
      priceEstimates: [
        {
          plan: 'basic',
          priceEstimate: 50,
        },
        {
          plan: 'standard',
          priceEstimate: 99,
        },
      ],
    },
  ];

  const allProviders = [];

  for (const provider of data) {
    if (!allProviders.includes(provider.provider)) {
      allProviders.push(provider.provider);
    }
  }

  const healthProviders = {};

  for (const provider of allProviders) {
    healthProviders[provider] = [];
  }

  for (const user of data) {
    healthProviders[user.provider].push(user);
  }

  const providers = Object.keys(healthProviders);

  return (
    <div className="App">
      <h1>Health Benefits</h1>
      {providers.map((provider) => {
        return (
          <UserInfo healthProviders={healthProviders} provider={provider} />
        );
      })}
    </div>
  );
};

export default App;
