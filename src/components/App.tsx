import { FC, useEffect, useState } from "react";

// import styles from "./App.module.css";
import { cleanse } from "../services/instance";
// import useDucks from "../hooks/useDucks";
import useStore from "../services/store";
import Spinner from "./Spinner";
import Helmet from "react-helmet";
import { Outlet } from "react-router";
import mlrdLogo from "../assets/favicon.png";

import { mainClass, headingClass, headerClass, logoClass } from "./App.css";
import { app, getMessaging } from "../services/firebase";
import messagingService from "../services/messaging";
import { onMessage } from "firebase/messaging";
import { useRegisterSW } from "virtual:pwa-register/react";

const title = "Kvaak ERP";

const App: FC = () => {
  const [renderCount, setRenderCount] = useState<number>(0);
  // const { ducks, isInitialized, hireDuck, fireDuck, duckIsBeingHired } = useDucks();

  const getDucks = useStore((state) => state.getDucks);
  const operationsPending = useStore((state) => state.operationsPending);

  const tussi = useRegisterSW({
    onRegistered: async (registration) => {
      if (!registration) {
        return;
      }

      await navigator.serviceWorker.ready;

      console.log("REGISTRASHUUN", registration);
      const [token, messaging] = await getMessaging(registration);

      onMessage(messaging, (m) => {
        console.log("m", m);
      });
    }
  });

  console.log("TUSSI", tussi);

  useEffect(() => {
    /*
    const tusser = async () => {
      console.log(app, "app");
      const [token, messaging] = await getMessaging();

      if (!token) {
        return;
      }

      const ret = await messagingService.register(token);

      console.log(ret, "RET");

      console.log("TOUKKA TOKEN", token);

      onMessage(messaging, (message) => {
        console.log("MESSAGE", message);
      });
    };

    tusser();
    */
  }, []);

  useEffect(() => {
    getDucks();
  }, [getDucks]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRenderCount((renderCount) => {
        // console.log("Time to update counter!", renderCount);
        return renderCount + 1;
      });
    }, 1000);

    return () => {
      console.log("I am cleaning up");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {operationsPending > 0 && <Spinner />}
      <header className={headerClass}>
        <h1 className={headingClass}>
          <img alt={title} src={mlrdLogo} width="50" className={logoClass} />
          {title}
        </h1>
      </header>
      <main className={mainClass}>
        <p>
          I have been rendered <strong>{renderCount}</strong> times!{" "}
          {
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                cleanse();
              }}
            >
              cleanse
            </button>
          }
        </p>

        <Outlet />
      </main>
    </>
  );
};

export default App;
