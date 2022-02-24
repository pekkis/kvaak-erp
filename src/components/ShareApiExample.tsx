import { FC, useEffect, useState } from "react";
import Button from "./Button";

const shareable: ShareData = {
  title: "Kvaak API demonstration!",
  url: "https://kvaak.pekkis.eu/apis",
  text: "There are lots of interdasting APIs in the browser. Here you can see a couple of them!"
};

const canShare = (shareable: ShareData) => {
  if (!navigator.canShare) {
    return false;
  }

  return navigator.canShare(shareable);
};

const ShareApiExample: FC = () => {
  const [shared, setShared] = useState<boolean>(false);

  const isShareable = canShare(shareable);

  return (
    <section>
      <h2>Share API</h2>

      <p>
        Navigator is able to share?:{" "}
        <strong>{isShareable ? "YES" : "NO"}</strong>
      </p>

      <p>
        <Button
          onClick={async () => {
            try {
              await navigator.share(shareable);
              setShared(true);
            } catch (e) {
              console.log("SHARE FAILED!!!", e);
            }
          }}
        >
          Share this page!
        </Button>
      </p>

      {shared && <p>Shared successfully!</p>}
    </section>
  );
};

export default ShareApiExample;
