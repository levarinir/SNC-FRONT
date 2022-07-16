import React from 'react';
import { testApi } from '../../api/work';
import { toast } from 'react-toastify';

const Card = ({ title, f, user }) => {
  const handleApi = async () => {
    const token = user && user.token;
    const res = await testApi(f, token);
    if (res.status === 200) {
      toast(res.data);
    }
  };
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="btn btn-primary" onClick={() => handleApi()}>
          check {f}
        </div>
      </div>
    </div>
  );
};

export default Card;
