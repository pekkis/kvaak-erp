import { FC, useEffect, useState } from "react";

type GyroValue = {
  x?: number;
  y?: number;
  z?: number;
};

const SensorsApiExample: FC = () => {
  const [gyroscope, setGyroscope] = useState<GyroValue | undefined>(undefined);

  useEffect(() => {
    try {
      const gyro = new Gyroscope({ frequency: 5 });
      gyro.addEventListener("reading", function () {
        setGyroscope({
          x: this.x,
          y: this.y,
          z: this.z
        });
      });

      gyro.start();

      return () => {
        gyro.stop();
      };
    } catch (e) {
      return;
    }
  }, []);

  return (
    <section>
      <h2>SensorsAPI</h2>

      <h3>Gyroscope</h3>

      {gyroscope && (
        <table>
          <tbody>
            <tr>
              <th>X</th>
              <td>{gyroscope.x}</td>
            </tr>
            <tr>
              <th>Y</th>
              <td>{gyroscope.y}</td>
            </tr>
            <tr>
              <th>Z</th>
              <td>{gyroscope.z}</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
};

export default SensorsApiExample;
