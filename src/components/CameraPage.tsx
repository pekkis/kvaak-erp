import { FC, useCallback, useRef, useState } from "react";
import Helmet from "react-helmet";

import Camera from "react-webcam";
import Button from "./Button";
import { cameraClass } from "./CameraPage.css";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const CameraPage: FC = () => {
  const webcamRef = useRef<Camera>(null);

  const [src, setSrc] = useState<string | null>();

  const capture = useCallback(() => {
    if (!webcamRef.current) {
      return;
    }

    console.log(webcamRef.current);
    const imageSrc = webcamRef.current.getScreenshot();

    setSrc(imageSrc);
  }, [webcamRef]);

  return (
    <section>
      <Helmet>
        <title>Camera</title>
      </Helmet>

      <h2>Camera</h2>

      <div className={cameraClass}>
        <Button onClick={() => capture()}>snibeti snab</Button>

        <Camera
          ref={webcamRef}
          width="100%"
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />

        {src && (
          <p>
            <img alt="snib snab" src={src} />
          </p>
        )}
      </div>
    </section>
  );
};

export default CameraPage;
