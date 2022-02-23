import { FC, useEffect, useState } from "react";

const GeoLocationExample: FC = () => {
  const [geo, setGeo] = useState<GeolocationCoordinates | undefined>(undefined);

  useEffect(() => {
    const g = navigator.geolocation;

    console.log("G", g);

    const wid = g.watchPosition(
      (p) => {
        console.log("P", p);
        setGeo(p.coords);
      },
      (e) => {
        console.log(e, "e");
      }
    );

    g.getCurrentPosition(
      (p) => {
        console.log("xoox xoox", p);
      },
      (e) => {
        console.log("ERRO FATAL");
      }
    );

    console.log("wid", wid);

    return () => {
      console.log("HELEI HELEI");
      g.clearWatch(wid);
    };
  }, []);

  return (
    <section>
      <h2>Geolocation API</h2>

      {!geo && <p>No geolocation available...</p>}

      {geo && (
        <div>
          (Accuracy: {geo.accuracy})
          <table>
            <tbody>
              <tr>
                <th>Latitude</th>
                <td>{geo.latitude}</td>
              </tr>
              <tr>
                <th>Longitude</th>
                <td>{geo.longitude}</td>
              </tr>
              <tr>
                <th>Altitude</th>
                <td>{geo.altitude}</td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>{geo.speed}</td>
              </tr>
              <tr>
                <th>Heading</th>
                <td>{geo.heading}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default GeoLocationExample;
