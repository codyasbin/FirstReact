import React, { useState } from "react";

const Container = ({ stylee, setStylee }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [showGameStartText, setShowGameStartText] = useState(false);

  const namesArray = [
    "ShadowStriker",
    "CyberPilot",
    "BlazeHunter",
    "MysticGamer",
    "PhoenixMaster",
    "RogueReaper",
    "LunarLegend",
    "TitanSlayer",
    "NovaSpectre",
    "SavageVortex",
    "RapidRaptor",
    "StealthWarden",
    "AbyssalKnight",
    "ViperVenom",
    "DoomSpecter",
    "FuryFirebrand",
    "ThunderFury",
    "EternalNinja",
    "StormChaser",
    "InfernoDragon"
  ];

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * namesArray.length);
    return namesArray[randomIndex];
  };

  const CheckName = () => {
    const randomName = generateRandomName();
    setName(randomName);
    setShowGameStartText(true);
  };

  const onToggleSwitch = () => {
    setIsChecked(!isChecked);
    setStylee({
      backgroundColor: isChecked ? "" : "black",
      color: isChecked ? "" : "white",
    });
  };

  return (
    <div>
      <div className="jumbotron text-center mb-0 mt-16" style={stylee}>
        <div className="container">
          <h1 className="display-3">Welcome to Asbins Playground</h1>
      
          <p className="lead ">Magic of Codes</p>
          <hr className="my-2"></hr>
          {name ? <p>username: {name}</p> : null}
          {showGameStartText ? (
            <h3 className="h3">Enjoy!</h3>
          ) : (
            <p className="lead">
              <button className="btn btn-dark btn-lg" onClick={CheckName}>
                Get Started
              </button>
            </p>
          )}
        </div>
        <form className="float-right">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="switch1"
              checked={isChecked}
              onChange={onToggleSwitch}
            />
            <label className="custom-control-label" htmlFor="switch1">
              {isChecked ? "Disable Dark Mode" : "Enable Dark Mode"}
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Container;
