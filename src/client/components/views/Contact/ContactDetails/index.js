import "./contactDetails.scss";
import { useParams } from "react-router";
import { contactList } from "../../../../utils/const";
import { useEffect, useState } from "react";

export default function ContactDetails() {
  const { city } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const contactByCity = contactList.filter((contact) => contact.url === city);
    setContact(contactByCity[0]);
  }, []);

  return (
    <div className="contactDetails">
      {contact && (
        <>
          <img src={contact.img} alt={contact.name}></img>
          <div className="info">
            <h3>{contact.name}</h3>
            <p>{contact.address}</p>
            <p>{contact.phone}</p>
          </div>
        </>
      )}
    </div>
  );
}
