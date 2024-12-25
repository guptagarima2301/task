import React from "react";
import targetImg from "../assets/goal.png";
import groupImg from "../assets/friend.png";
import paymentImg from "../assets/pay.png";
import rewardsImg from "../assets/gift.png";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="container">
      <h1 className="title">How It Works</h1>
      <div className="steps-container">
  <svg className="dotted-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150">
    <defs>
      <marker
        id="arrow"
        markerWidth="5"
        markerHeight="10"
        refX="5"
        refY="9"
        orient="auto"
      >
        <path d="M0,0 L10,5 L0,10 Z" fill="#ccc" />
      </marker>
    </defs>
    <path
      d="M100 100 C200 30, 400 250, 500 80 S700 50, 800 120"
      fill="none"
      stroke="#9BBDCF"
      strokeWidth="3"
      strokeDasharray="10, 10"
      markerEnd="url(#arrow)"
    />
  </svg>

  {/* Step 1 */}
  <div className="circle" style={{ left: "44px", top: "180px" }}>
    <img src={targetImg} alt="Set your goal" />
    <p>Step 1: Set your goal</p>
  </div>

  {/* Step 2 */}
  <div className="circle" style={{ left: "310px", top: "140px" }}>
    <img src={groupImg} alt="Create or Join Group" />
    <p>Step 2: Create or Join Group</p>
  </div>

  {/* Step 3 */}
  <div className="circle" style={{ left: "580px", top: "200px" }}>
    <img src={paymentImg} alt="Pay amount on time" />
    <p>Step 3: Pay amount on time</p>
  </div>

  {/* Step 4 */}
  <div className="circle" style={{ left: "800px", top: "24px" }}>
    <img src={rewardsImg} alt="Earn Rewards" />
    <p>Step 4: Earn Rewards</p>
  </div>
</div>

    </div>
  );
};

export default HowItWorks;
