import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./serviceCard.scss";

type ServiceCardT = {
  img: string;
  description: string;
  link: string;
};

export default function ServiceCard({ img, description, link }: ServiceCardT): ReactElement {
  return (
    <div className="service">
      <img src={img} alt={description}></img>
      <p>{description}</p>
      <Link to={`/${link}`}>{link}</Link>
    </div>
  );
}
