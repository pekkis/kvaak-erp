import { FC } from "react";
import Helmet from "react-helmet";
import BatteryApiExample from "./BatteryApiExample";
import ContactsApiExample from "./ContactsApiExample";
import EyedropperApiExample from "./EyedropperApiExample";
import FileSystemAccessApiExample from "./FileSystemAccessApiExample";
import GeoLocationExample from "./GeolocationExample";
import NetworkApiExample from "./NetworkApiExample";
import SensorsApiExample from "./SensorsApiExample";
import ShareApiExample from "./ShareApiExample";
import SpeechApiExample from "./SpeechApiExample";
import VibrationApiExample from "./VibrationApiExample";

const ApisPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Random APIs</title>
      </Helmet>

      <NetworkApiExample />

      <GeoLocationExample />

      <VibrationApiExample />

      <EyedropperApiExample />

      <BatteryApiExample />

      <ContactsApiExample />

      <ShareApiExample />

      <SpeechApiExample />

      <FileSystemAccessApiExample />

      <SensorsApiExample />
    </>
  );
};

export default ApisPage;
