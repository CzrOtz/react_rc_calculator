import React, { useState } from 'react';
import '../styles/interface.css';

function Interface() {
  const [pteeth, setPteeth] = useState('');
  const [steeth, setSteeth] = useState('');
  const [tgr, setTgr] = useState('');
  const [batv, setBatv] = useState('');
  const [kv, setKv] = useState('');
  const [wd, setWd] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setShowResults(false);
  };

  const calculatePinionToSpurGearRatio = () => {
    return steeth / pteeth;
  };

  const calculateTotalGearRatio = () => {
    return calculatePinionToSpurGearRatio() * tgr;
  };

  const calculateMotorRpm = () => {
    return batv * kv;
  };

  const calculateWheelRpm = () => {
    return calculateMotorRpm() / calculateTotalGearRatio();
  };

  const calculateWheelSpeed = () => {
    const wheelDiameterInFeet = wd / 12;
    const wheelCircumferenceInFeet = Math.PI * wheelDiameterInFeet;
    const distancePerMinuteInFeet = calculateWheelRpm() * wheelCircumferenceInFeet;
    const distancePerHourInFeet = distancePerMinuteInFeet * 60;
    const distancePerHourInMiles = distancePerHourInFeet / 5280;

    return distancePerHourInMiles;
  };

  const showCalculations = () => {
    if (showResults) {
      return (
        <div className="results">
          <div>Wheel Speed: {calculateWheelSpeed().toFixed(2)} MPH</div>
          <div>Pinion to Spur Gear Ratio: {calculatePinionToSpurGearRatio().toFixed(2)}</div>
          <div>Total Gear Ratio: {calculateTotalGearRatio().toFixed(2)}</div>
          <div>Motor RPM: {calculateMotorRpm().toFixed(2)}</div>
          <div>Wheel RPM: {calculateWheelRpm().toFixed(2)}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="interface-container">
      <form className="interface-form">
        <div className="form-group">
          <label>Pinion Teeth Count</label>
          <input
            type="text"
            value={pteeth}
            placeholder="Enter teeth count"
            onChange={handleInputChange(setPteeth)}
          />
        </div>

        <div className="form-group">
          <label>Enter Spur Gear Teeth Count</label>
          <input
            type="text"
            value={steeth}
            placeholder="Enter teeth count"
            onChange={handleInputChange(setSteeth)}
          />
        </div>

        <div className="form-group">
          <label>Enter Transmission Gear Ratio</label>
          <input
            type="text"
            value={tgr}
            placeholder="Enter a ratio (2.7, 2.8, 1.5)"
            onChange={handleInputChange(setTgr)}
          />
        </div>

        <div className="form-group">
          <label>Enter Battery Voltage</label>
          <input
            type="text"
            value={batv}
            placeholder="Enter a voltage, 7.4, 11.1"
            onChange={handleInputChange(setBatv)}
          />
        </div>

        <div className="form-group">
          <label>Enter Motor Kv</label>
          <input
            type="text"
            value={kv}
            placeholder="Enter the kV of the motor"
            onChange={handleInputChange(setKv)}
          />
        </div>

        <div className="form-group">
          <label>Enter Wheel Diameter</label>
          <input
            type="text"
            value={wd}
            placeholder="Enter the diameter of the wheel"
            onChange={handleInputChange(setWd)}
          />
        </div>
      </form>

      <button className="calculate-button" onClick={() => { setShowResults(true); }}>
        Show Results
      </button>

      {showCalculations()}
    </div>
  );
}

export default Interface;


