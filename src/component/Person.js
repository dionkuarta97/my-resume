import img from "../PhotoFunia-1636565369.jpg";

import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Person() {
  return (
    <>
      <div
        className="person"
        style={{
          background: `url(${img}) center top/cover no-repeat`,
        }}
      >
        <div className="basic-info">
          <h1>Dion Disemenggar</h1>
          <h2
            style={{
              color: "white",
            }}
          >
            Penanda Kwarta Putra
          </h2>
          <ul className="social-links">
            <li>
              {" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/dionmazri/"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/dion.disemenggar/"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/dionkuarta97"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dion-kuarta-0b8035226/"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Person;
