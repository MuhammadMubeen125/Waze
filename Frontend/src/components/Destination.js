import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, wintin a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano in Batangas, Philippines, promises a captivating blend of natural beauty and historical intrigue. As one of the country's most active volcanoes, Taal boasts a unique setting within Taal Lake, creating a stunning panorama."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-rev"
        heading="Mt. Daguldal, Batangas"
        text="This mountain is a one of a kind mountain where you will be able to experience a variety of terrains. Daguldol provides great views overlooking the nearby beach, lush woodlands, rolling slopes, and nearby mountains."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
