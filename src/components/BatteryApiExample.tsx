import { FC, useEffect, useState } from "react";

type BatteryManager = {
  level: number;
};

declare global {
  interface Navigator {
    getBattery: () => Promise<BatteryManager>;
  }
}

const BatteryApiExample: FC = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const batterizer = async () => {
      if (!navigator.getBattery) {
        return;
      }

      const b = await navigator.getBattery();
      console.log("BATTERY", b);
      setBatteryLevel(b.level);
    };

    batterizer();
  }, []);

  return (
    <section>
      <h2>Battery API</h2>

      <p>
        Battery level:{" "}
        <strong>{batteryLevel ? batteryLevel * 100 + "%" : "unknown"}</strong>
      </p>
    </section>
  );
};

export default BatteryApiExample;
