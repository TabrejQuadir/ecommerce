import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  const [selectedTab, setSelectedTab] = useState('description');

  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div
                className={`descriptionbox-nav-box ${selectedTab === 'description' ? 'selected' : ''}`}
                onClick={() => setSelectedTab('description')}
            >
                Description
            </div>
            <div
                className={`descriptionbox-nav-box ${selectedTab === 'reviews' ? 'selected' : 'fade'}`}
                onClick={() => setSelectedTab('reviews')}
            >
                Reviews (122)
            </div>
        </div>
        
        <div className={`descriptionbox-description ${selectedTab === 'description' ? 'active' : ''}`}>
            <p>E-commerce (electronic commerce) is the exchange of goods and services and the transmission of funds and data over the internet. E-commerce relies on technology and digital platforms, including websites, mobile apps, and social media to make buying and selling possible. Featured Partners.</p>
            <p>E-commerce (electronic commerce) is the exchange of goods and services and the transmission of funds and data over the internet. E-commerce relies on technology and digital platforms, including websites, mobile apps, and social media to make buying and selling possible. Featured Partners.</p>
        </div>
        
        <div className={`descriptionbox-reviews ${selectedTab === 'reviews' ? 'active' : ''}`}>
            <div className='review'>
                <div className='review-author'>John Doe</div>
                <div className='review-content'>Great product! Really improved my workflow.</div>
            </div>
            <div className='review'>
                <div className='review-author'>Jane Smith</div>
                <div className='review-content'>Excellent service and support. Highly recommend!</div>
            </div>
            <div className='review'>
                <div className='review-author'>Emily Johnson</div>
                <div className='review-content'>Good value for money. Will purchase again.</div>
            </div>
            {/* Add more reviews as needed */}
        </div>
    </div>
  );
}

export default DescriptionBox;
