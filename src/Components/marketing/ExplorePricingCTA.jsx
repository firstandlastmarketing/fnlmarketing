import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExplorePricingCTA = ({ className, label = 'Explore Pricing' }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/pricing')}
      className={`bg-yellow-500 hover:bg-yellow-600 text-white font-extrabold px-4 py-2 rounded-full transition duration-200 whitespace-nowrap ${className || ''}`}
      type="button"
    >
      {label}
    </button>
  );
};

export default ExplorePricingCTA;
