import { spanishData } from "../../../data/data";
import "./footer.css";

const Footer = () => {
  return (
    <div className="background-1 footer">
      <p>
        Copyright © 2022
        <a
          href={spanishData?.socialNetworks?.linkedin}
          target="_blank"
          rel="noreferrer"
          className="name__rights"
        >
          Gastón Colaneri
        </a>
        . All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
