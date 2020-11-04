import React from "react";
import { withRouter } from 'react-router-dom';
import { Typography } from "antd";
import logo from "../../assets/images/Discogs.svg.png";
import InputSearch from '../inputSearch/InputSearch';
import Album from '../album/Album';
import "../../assets/styles/main.css";

const { Title } = Typography;

function Header() {

  return (
    <>
      <div className="main">
        <img alt="Discogs logo" src={logo} className="logo" />
        <Title className="about-us" level={1}>
          Nuestro objetivo principal es construir la base de datos y el mercado
          online de música más grande y completo que existen hoy en día.{" "}
        </Title>
      </div>
      <InputSearch/>
      <Album/>
    </>
  );
}

export default withRouter(Header);
