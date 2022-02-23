import { FC } from "react";
import Helmet from "react-helmet";
import GeoLocationExample from "./GeolocationExample";
import ShareApiExample from "./ShareApiExample";
import SpeechApiExample from "./SpeechApiExample";

const ApisPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Random APIs</title>
      </Helmet>

      <GeoLocationExample />

      <ShareApiExample />

      <SpeechApiExample />
    </>
  );
};

export default ApisPage;
