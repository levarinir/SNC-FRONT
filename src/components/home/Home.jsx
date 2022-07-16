import React from 'react';
import Card from '../card/Card';
const Home = ({ user }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Card title="Test api F1" f={1} />
          <Card title="Test api F2" f={2} user={user} />
          <Card title="Test api F3" f={3} user={user} />
        </div>
      </div>
    </div>
  );
};

export default Home;
