import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Flex } from "@chakra-ui/react";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="aboutUs">
        <h2>Sobre nosotros</h2>
        <div>
          Somos una tienda que se dedica a la venta de todo tipo de ropa, desde medias hasta sombreros.
        </div>
      </div>
      <div className="footer_categories">
        <h2>Categorías</h2>
        <ul>
          <Link to={`/category/${"Pantalones"}`}>
            <li>
              <h3>Pantalones</h3>
            </li>
          </Link>{" "}
          <Link to={`/category/${"Abrigos"}`}>
            <li>
              <h3>Abrigos</h3>
            </li>
          </Link>
          <Link to={`/category/${"Camisas"}`}>
            <li>
              <h3>Camisas</h3>
            </li>
          </Link>{" "}
          <Link to={`/category/${"Camisetas"}`}>
            <li>
              <h3>Camisetas</h3>
            </li>
          </Link>
        </ul>
      </div>
      <div className="footer_contact">
        <h2>Contactános</h2>
        <Link target="_blank" to={"https://wa.link/6cnj10"}>
          <Flex alignItems="center" gap={2}>
            <FontAwesomeIcon icon={faWhatsapp} fontSize={22} />
            <h4>1123488184</h4>
          </Flex>
        </Link>
        <Flex alignItems="center" gap={2}>
          <FontAwesomeIcon icon={faEnvelope} fontSize={22} />
          <button
            onClick={() => (window.location = "mailto:asdfasdf@gmail.com")}
          >
            asdfasdf@gmail.com
          </button>
        </Flex>
        <Link target="_blank" to={"https://goo.gl/maps/kjMzH9j4pm9SXN6d9"}>
          <Flex alignItems="center" gap={2}>
            <FontAwesomeIcon icon={faLocationDot} fontSize={22} />
            <h4>Av. Rivadavia, C1424 CABA</h4>
          </Flex>
        </Link>
      </div>
      <div className="footer_networks">
        <h2>Sigamos en Conectato</h2>
        <div className="networks">
        <Link target="_blank" to={"https://www.instagram.com"}>
            <i><FontAwesomeIcon icon={faInstagram}/></i>
          </Link>
          <Link target="_blank" to={"https://www.twitter.com"}>
            <i><FontAwesomeIcon icon={faTwitter}/></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
