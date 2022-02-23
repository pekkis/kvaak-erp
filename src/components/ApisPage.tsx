import { FC } from "react";
import Helmet from "react-helmet";
import GeoLocationExample from "./GeolocationExample";

const ApisPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Random APIs</title>
      </Helmet>

      <GeoLocationExample />
    </>
  );
};

export default ApisPage;
