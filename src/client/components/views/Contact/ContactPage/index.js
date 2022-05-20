import "./contactPage.scss";
import { Link } from "react-router-dom";
import { contactList } from "../../../../utils/const";

export default function ContactPage() {
  return (
    <div className="contactPage">
      <h3>Contact us</h3>
      <div className="cities">
        {contactList.map((city) => (
          <div className="cityCard">
            <img src={city.img} alt={city.name}></img>
            <Link to={city.url}>{city.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
