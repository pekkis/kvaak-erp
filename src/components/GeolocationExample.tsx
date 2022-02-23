import { FC, useEffect, useState } from "react";

const GeoLocationExample: FC = () => {
  const [geo, setGeo] = useState<GeolocationCoordinates | undefined>(undefined);

  useEffect(() => {
    const tusser = async () => {
      const g = navigator.geolocation;

      g.watchPosition(
        (p) => {
          console.log("P", p);
          setGeo(p.coords);
        },
        (e) => {
          console.log(e, "e");
        }
      );
    };

    tusser();
  }, []);

  return (
    <section>
      <h2>Geolocation</h2>

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
