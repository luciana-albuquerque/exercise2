import React, { ReactElement } from "react";
import "./footer.scss";
import Button from "../../general/Button";
import { Link } from "react-router-dom";

function Footer(): ReactElement {
  
  return (
    <footer>
      <div className="main">
        <div className="subscribe">
          <h3>sooth</h3>
          <p>Explore our innovative skincare products</p>
          <form>
            <input type="email"></input>
            <Button text="Subscribe" />
          </form>
        </div>

        <nav className="siteMap">
          <section className="section">
            <h5>SHOP</h5>
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </section>

          <section className="section">
            <h5>ABOUT</h5>
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </section>

          <section className="section">
            <h5>MORE</h5>
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </section>
        </nav>
      </div>

      <div className="policies">
        <div className="links">
          <p>SOOTH ALL RIGHTS RESERVED</p>
          <ul>
            <li>
              <Link to='/'>Privacy Policy</Link>
            </li>
            <li>
              <Link to='/'>Terms of Use</Link>
            </li>
            <li>
              <Link to='/'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
