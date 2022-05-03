import React from "react";
import "./newsletter.scss";
import Button from "../Button";

export default function Newsletter() {
  
  return (
    <section className="newsletter">
      <div className="content">
        <h2>Join the Sooth family</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <form>
        <input type="email"></input>
        <Button text="Subscribe" />
      </form>
    </section>
  );
}
