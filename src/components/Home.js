import React from "react";
import "./Home.css"

const Home = ({ guest }) => {
  return (
    <>
      <h1>Welcome to Stranger's Things</h1>
      {guest && <h3>You are logged in - {guest} </h3>} 
        {/* ^^^ NOT WORKING!!  */}
    </>
  );
};

export default Home;
