import { FC, useEffect, useState } from "react";
import { DuckType } from "../services/duck";
import useStore from "../services/store";
import DuckList from "./DuckList";
import HireDuckForm from "./HireDuckForm";
import Helmet from "react-helmet";
import { cleanse } from "../services/instance";

const IndexPage: FC = () => {
  const [renderCount, setRenderCount] = useState<number>(0);

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

  const ducks = useStore((state) => state.ducks);
  const fireDuck = useStore((state) => state.fireDuck);
  const isInitialized = useStore((state) => state.isInitialized);
  const hireDuck = useStore((state) => state.hireDuck);
  const duckIsBeingHired = useStore((state) => state.duckIsBeingHired);

  const isGood = (duck: DuckType) => {
    if (duck.relatedToCEO) {
      return true;
    }

    return duck.age < 8 && duck.age >= 1 && !duck.migratesForWinters;
  };

  const goodDucks = Object.values(ducks).filter(isGood);
  const badDucks = Object.values(ducks).filter((duck) => !isGood(duck));

  return (
    <>
      <Helmet>
        <title>Duck List - Mallard ERP</title>
      </Helmet>

      <p>
        I have been rendered <strong>{renderCount}</strong> times!{" "}
        {/*
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              cleanse();
            }}
          >
            cleanse
          </button>
          */}
      </p>

      <HireDuckForm hireDuck={hireDuck} duckIsBeingHired={duckIsBeingHired} />

      {!isInitialized && (
        <p>
          <em>HOLD YER HORSES...</em>
        </p>
      )}

      {isInitialized && (
        <>
          <h2>Bad ducks</h2>
          <DuckList showMetadata fireDuck={fireDuck} ducks={badDucks} />

          <h2>Good ducks</h2>
          <DuckList fireDuck={fireDuck} ducks={goodDucks} />
        </>
      )}
    </>
  );
};

export default IndexPage;
