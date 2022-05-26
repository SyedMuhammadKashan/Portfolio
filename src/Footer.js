import React from "react";
import "./Style/Footer.css";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = function () {
  return (
    <React.Fragment>
      <div className="container-fluid sfooter">
        <h2 style={{ paddingTop: "13px", display: "inline-flex" }}>
          My Portfolio{" "}
          <span>
            <ul>
              <h3
                style={{
                  display: "flex",
                  listStyle: "none",
                }}
              >
                <li style={{ marginRight: "13px", marginLeft: "20px" }}>
                  <a href="https://www.linkedin.com/in/syed-muhammad-kashan-b9103221a">
                    <BsLinkedin color="#5DADE2  " />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/kashan.k.kashan/">
                    <BsFacebook color="#6699FF " />
                  </a>
                </li>
              </h3>
            </ul>
          </span>
        </h2>

        <form>
          <div className="form-row sform ">
            <div className="col-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="News letter"
              />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default Footer;
