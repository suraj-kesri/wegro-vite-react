import React from "react";
import Team from "../components/Team/Team";

const OurStory: React.FC = () => {
  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1>At Wegro, we believe City living shouldn't mean losing touch with nature. Our mission is simple: bring farming back into urban homes, not as a chore, but as a lifestyle upgrade.</h1>
      <Team />
    </div>
  );
};

export default OurStory;
