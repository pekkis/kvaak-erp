import { FC, useState } from "react";
import Button from "./Button";

type EyeDropperResultType = {
  sRGBHex: string;
};

type EyedropperType = {
  new (property: string): EyedropperType;
  open(): Promise<EyeDropperResultType>;
};

declare global {
  interface Window {
    EyeDropper: new () => EyedropperType;
  }
}

const EyedropperApiExample: FC = () => {
  const [color, setColor] = useState<string | undefined>(undefined);

  return (
    <section>
      <h2>Eyedropper API</h2>

      <Button
        onClick={async () => {
          const droppa = new window.EyeDropper();

          const result = await droppa.open();

          setColor(result.sRGBHex);
        }}
      >
        Pick a color!
      </Button>

      {color && (
        <p>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: color,
              border: "1px solid rgb(0, 0, 0)"
            }}
          ></div>
        </p>
      )}
    </section>
  );
};

export default EyedropperApiExample;
