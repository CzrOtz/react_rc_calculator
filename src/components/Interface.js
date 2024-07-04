import React, { useState } from 'react';
import '../styles/interface.css';

function Interface() {
  const [pteeth, setPteeth] = useState('');
  const [steeth, setSteeth] = useState('');
  const [tgr, setTgr] = useState('');
  const [cellCount, setCellCount] = useState('');
  const [kv, setKv] = useState('');
  const [wd, setWd] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setShowResults(false);
  };

  const getVoltageRangeFromCellCount = (cellCount) => {
    const nominalVoltagePerCell = 3.7;
    const maxVoltagePerCell = 4.2;
    const minVoltagePerCell = 3.5;
    return {
      min: cellCount * minVoltagePerCell,
      max: cellCount * maxVoltagePerCell
    };
  };

  const calculatePinionToSpurGearRatio = () => {
    return steeth / pteeth;
  };

  const calculateTotalGearRatio = () => {
    return calculatePinionToSpurGearRatio() * tgr;
  };

  const calculateMotorRpm = (voltage) => {
    return voltage * kv;
  };

  const calculateWheelRpm = (voltage) => {
    return calculateMotorRpm(voltage) / calculateTotalGearRatio();
  };

  const calculateWheelSpeed = (voltage) => {
    const wheelDiameterInFeet = wd / 12;
    const wheelCircumferenceInFeet = Math.PI * wheelDiameterInFeet;
    const distancePerMinuteInFeet = calculateWheelRpm(voltage) * wheelCircumferenceInFeet;
    const distancePerHourInFeet = distancePerMinuteInFeet * 60;
    const distancePerHourInMiles = distancePerHourInFeet / 5280;

    return distancePerHourInMiles;
  };

  const showCalculations = () => {
    if (showResults) {
      const { min, max } = getVoltageRangeFromCellCount(cellCount);
      const minSpeed = calculateWheelSpeed(min).toFixed(2);
      const maxSpeed = calculateWheelSpeed(max).toFixed(2);
      
      return (
        <div className="results">
          <div>Wheel Speed Range: <strong>{minSpeed}</strong> - <strong>{maxSpeed}</strong> MPH</div>
          <br />
          <div>Pinion to Spur Gear Ratio: <strong>{calculatePinionToSpurGearRatio().toFixed(2)}</strong></div>
          <br />
          <div>Total Gear Ratio: <strong>{calculateTotalGearRatio().toFixed(2)}</strong></div>
          <br />
          <div>Motor RPM Range: <strong>{(calculateMotorRpm(min)).toFixed(2)}</strong> - <strong>{(calculateMotorRpm(max)).toFixed(2)}</strong></div>
          <br />
          <div>Wheel RPM Range: <strong>{(calculateWheelRpm(min)).toFixed(2)}</strong> - <strong>{(calculateWheelRpm(max)).toFixed(2)}</strong></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="interface-container">
      <div><strong>Interface</strong></div>
      <br />
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
          <label>Enter LiPo Battery Cell Count</label>
          <input
            type="text"
            value={cellCount}
            placeholder="Enter cell count (e.g., 2, 3, 4)"
            onChange={handleInputChange(setCellCount)}
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



