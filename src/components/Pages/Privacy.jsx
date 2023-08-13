import React from 'react';
import './Privacy.css'; // You can create a separate CSS file for styling
import img from "./Privacy.png"
function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-container">
     
      <img
        src={img}
        alt="Privacy Policy Illustration"
        className="privacy-policy-image"
      />
    </div>
  );
}

export default PrivacyPolicyPage;
