import React from 'react'
import './FeatureCard.css'

function FeatureCard({featureImg, featureText}) {
  return (
    
    <div className="feature-card">
        <img className="feature-img" src={featureImg} alt="time-img" />
        <p className="text text-center">
            {featureText}
        </p>
    </div>
  )
}

export default FeatureCard