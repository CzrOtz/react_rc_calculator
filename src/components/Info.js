import React from 'react';
import '../styles/info.css';

function Info() {
return (
    <div className="info-container">
        <h2>Info</h2>
        <p><strong>Note:</strong> This website is geared towards brushless 1/10th scale RC cars. However, many more features are to come, if you're here, Welcome!</p>
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

        
        
    </div>
);
}

export default Info;
