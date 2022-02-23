import { FC } from "react";
import Helmet from "react-helmet";
import BatteryApiExample from "./BatteryApiExample";
import ContactsApiExample from "./ContactsApiExample";
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

      <BatteryApiExample />

      <ContactsApiExample />

      <ShareApiExample />

      <SpeechApiExample />
    </>
  );
};

export default ApisPage;
