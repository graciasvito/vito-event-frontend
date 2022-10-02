import AvaA from "../../assets/image/Avatar A.png";
import AvaB from "../../assets/image/Avatar B.png";
import AvaC from "../../assets/image/Avatar C.png";
import AvaD from "../../assets/image/Avatar D.png";

import "../Attendees/index.css";

export default function Attendees() {
  return (
    <div>
      <div className="attendants d-flex">
        <img src={AvaA} alt="Avatar A" className="attendant-ava1" />
        <img src={AvaB} alt="Avatar B" className="attendant-ava" />
        <img src={AvaC} alt="Avatar C" className="attendant-ava" />
        <div className="number-container">
          <img src={AvaD} alt="Avatar D" className="attendant-ava" />
          <div className="centered">62+</div>
        </div>
      </div>
    </div>
  );
}
