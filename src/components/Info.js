import React from 'react';
import '../styles/info.css';

function Info() {
return (
    <div className="info-container">
        <h2>Info</h2>
        <p>Here you will find information about how the calculations are performed and what each parameter means.</p>

        <ul>
            <li>
                <strong>Pinion tooth count:</strong> Usually stamped somewhere on the Pinion gear. This count contains the number of teeth on a 48p or 32p spacing gear.
                The spacing is relative to the pitch of the gear. The pitch is the distance between the teeth. The lower the pitch, the more spacing between
                the teeth. Since the spacing of the gear is constant, increasing the number of teeth will increase the diameter of the gear. Increasing the diameter
                of the gear will decrease the gear ratio, likewise decreasing the diameter will increase the gear ratio.
            </li>
            <li>
                <strong>Spur Gear:</strong> The spur gear is the counterpart to the pinion gear. The spur gear is the larger gear that the pinion gear meshes with. Spur
                gears are usually paired with a 'slipper clutch system'. The spur gear, similarly to the pinion gear, has a tooth count. The tooth count of the spur gear
                is usually much larger than the pinion gear. Similarly, spur gears have a pitch of 48p or 32p. The count can usually be found stamped on the gear.
            </li>
            <li>
                <strong>Transmission Gear Ratio:</strong> This ratio defines the relationship between the motor's input and the wheels' output.
                It is calculated by dividing the number of teeth on the input gear by the number of teeth on the output gear, including any intermediate gears.
                You can see the gear ratio yourself by rotating the input shaft, usually the input gear or a pinion gear "pinion meshed to the ring gear not the motor" 
                counting how many times you have to turn it for the wheels to turn once.
            </li>
            <li>
                <strong>Battery Voltage:</strong> If you're on this website, it is highly likely that you are using a LiPo battery. 
                The battery voltage indicated on the battery is the nominal voltage. The nominal voltage is the average voltage of the battery.
                However, the battery voltage can fluctuate depending on the charge of the battery. The voltage of the battery is important because it
                determines the speed of the motor. The higher the voltage, the faster the motor will spin.
            </li>
            <li>
                <strong>Motor kV:</strong> kV is the rpm of the motor measured per volt. A battery producing exactly 1 volt will make the motor spin at the kV rating.
                The kV rating is important because it determines how fast the motor will spin. The higher the kV rating, the faster the motor will spin. Refer to 
                "other section I haven't written yet" for more information on kV ratings.
            </li>
            <li>
                <strong>Wheel Diameter:</strong> The diameter of the wheel is important because it determines how far the car will travel in one rotation of the wheel.
                The larger the wheel, the further the car will travel in one rotation. The diameter of the wheel is measured from one side of the wheel to the other.
            </li>
        </ul>

        <div>
        <h1>Additional Information</h1>
<p>
  A thing that RC enthusiasts will attempt to do to achieve more speed out of their build is by increasing the size of their pinion gear and decreasing the size of the spur gear.
</p>

<p>
  Imagine the following scenario: Take your motor, put the shaft in a vice, and send full power to it. What will happen?
  The electricity will flow from the battery to the ESC, and from the ESC to the copper windings in the motor. The electricity will attempt
  to move the shaft, but it won't be able to because it's fixed in one position. The energy must go somewhere, so it turns into heat, and a lot of it.
</p>

<p><strong>As the gear ratio approaches 1:1,</strong> one turn of the motor equals one turn of the wheel. <strong>The ability of that motor to move those wheels approaches zero.</strong></p>

<h3>Power Delivery in RC Cars</h3>
<p>
  Electric motors <strong>do not</strong> produce power based on motor speed.
</p>
<p>
  Electric motors produce power based on load. The higher the load, the higher the power output.
  However, there is a point where the motor can no longer turn the current in the winding into rotational force. This leads to the motor overheating.
  This happens when the motor is under load, but the load is too great, similar to the vice analogy above.
</p>

<p>
  If you want to go faster the proper way, you need to either increase the speed of the motor or increase the amount of load that it can handle.
</p>

<p>
  Often you'll see very fast RC cars with two setups. 2S drag cars usually have very high kV motors, upwards of 5000 kV. However, due to requirements
  and the short length of the track, these motors can and do handle being overloaded for short periods of time. With a high enough kV, you'll be achieving
  3S speeds on 2S, but this is very short-lived.
</p>

<p>
  The more kV an electric motor has, the less resistance it has internally. It has less resistance because it has fewer turns, fewer wires. Therefore,
  the magnetic force being generated is weaker, and it has less torque. These motors tend to overheat drastically when they are under load.
</p>

<p>
  Generally, an electric motor with a lower kV will have more torque due to its stronger magnetic field. More wires mean more current flowing through the motor
  at any given point. Yes, these motors will spin slower, but they will have more torque, and consequently more power. This is why higher cell count batteries
  are often paired with lower kV motors. The motor can handle the extra load, and the battery can provide the extra power.
</p>


            
           
            
        </div>
    </div>
);
}

export default Info;
