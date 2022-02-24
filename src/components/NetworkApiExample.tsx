import { FC, useEffect, useState } from "react";

const supported = "connection" in navigator;

type NetworkInfoType = {
  type?: string;
  effectiveType?: string;
};

interface Connection extends EventTarget {
  type?: string;
  effectiveType?: string;
}

declare global {
  interface Navigator {
    connection: Connection;
  }
}

const NetworkApiExample: FC = () => {
  const [network, setNetwork] = useState<NetworkInfoType | undefined>(
    undefined
  );

  useEffect(() => {
    if (!supported) {
      return;
    }

    const updater = () => {
      console.log("njetwörk", navigator.connection);

      setNetwork({
        type: navigator.connection.type,
        effectiveType: navigator.connection.effectiveType
      });
    };

    updater();

    navigator.connection.addEventListener("change", updater);
    return () => {
      navigator.connection.removeEventListener("change", updater);
    };
  }, []);

  // navigator.connection

  if (!supported || !network) {
    return (
      <section>
        <h2>Network API</h2>

        <p>Not supported!</p>
      </section>
    );
  }

  navigator.connection;

  return (
    <section>
      <h2>Network API</h2>

      <table>
        <tbody>
          <tr>
            <th>Type</th>
            <td>{network.type}</td>
          </tr>
          <tr>
            <th>Effective Type</th>
            <td>{network.effectiveType}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default NetworkApiExample;
