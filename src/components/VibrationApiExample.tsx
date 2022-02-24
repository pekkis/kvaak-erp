import { FC } from "react";
import Button from "./Button";

const VibrationApiExample: FC = () => {
  return (
    <section>
      <h2>Vibration API</h2>

      <Button
        onClick={() => {
          navigator.vibrate([500, 500, 500]);
        }}
      >
        Vibrate!
      </Button>
    </section>
  );
};

export default VibrationApiExample;
