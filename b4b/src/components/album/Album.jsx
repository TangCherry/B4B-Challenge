import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Typography, Card, Button } from "antd";
import Modal from 'react-modal';
import "../../assets/styles/album.css";
import "../../assets/styles/card.css";

const { Title } = Typography;

function Album() {
  const [isOpen, setIsOpen] = useState(false);
  const [discog, setDiscog] = useState([]);

  let search = "Nirvana"
  const getData = async () => {
    fetch(`https://api.discogs.com/database/${search}?q=Nirvana&key=JtRZruQADaHwGCpIkFSL&secret=wzVmjUmKiWLJlGALuFAUuNhlTEnVHyOD`).then((data) => {
      setDiscog(data.json())
      console.log(discog)
    })
  }

  useEffect(() => {
    getData();
  }, [])

  function toggleModal() {
      setIsOpen(!isOpen);
  }

  return (
    <>
      <Row>
        {discog.discogs.map((item) => 
                  <Col
                  span={8}
                  style={{ paddingTop: 15, paddingRight: 15, paddingLeft: 15 }}
                >
                  <Card
                    hoverable
                    cover={
                      <img
                        className="album"
                        alt="portada de album"
                        src={item.portada}
                      />
                    }
                  >
                    <Title className="artist" level={4}>
                      {item.artista}
                    </Title>
                    <Button onClick={toggleModal} type="link" style={{ textAlign: 'center' }}>Ver más detalles</Button>
                  </Card>
                </Col>
        )}
         <Col
          span={8}
          style={{ paddingTop: 15, paddingRight: 15, paddingLeft: 15 }}
        >
          <Card
            hoverable
            cover={
              <img
                className="album"
                alt="meteora"
                src={
                  "https://www.elquintobeatle.com/wp-content/uploads/2016/03/love-of-lesbian-1999-o-como-generar-incendios-de-nieve-con-una-lupa-enfocada-a-la-luna-1.jpg"
                }
              />
            }
          >
            <Title className="artist" level={4}>
              Love of Lesbian
            </Title>
            <Button type="link" style={{ textAlign: 'center' }}>Ver más detalles</Button>
          </Card>
        </Col>

            <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            className="my-modal"
            overlayClassName="my-overlay"
            >
            <div className="modal">
            <Card
              hoverable
              style={{ width: 240, backgroundColor: 'black', borderColor: 'black' }}
              cover={
                <img
                  atl="solar"
                  src={
                    "https://upload.wikimedia.org/wikipedia/en/0/09/Solar_-_Spit_it_Out.jpg"
                  }
                />
              }
            >
              <div className="more">
              <p>Nombre: Spit it out</p>
              <p>Artista: Solar</p>
              <p>Estilo: K-pop</p>
              <p>Año: 2020</p>
              </div>
            </Card>
          </div>
            <Button onClick={toggleModal} className="close" type="link" style={{ textAlign: 'center', color: 'red' }}>Cerrar</Button>
            </Modal>

        <Col
          span={8}
          style={{ paddingTop: 15, paddingRight: 15, paddingLeft: 15 }}
        >
          <Card
            hoverable
            cover={
              <img
                className="album"
                alt="meteora"
                src={
                  "https://upload.wikimedia.org/wikipedia/en/0/09/Solar_-_Spit_it_Out.jpg"
                }
              />
            }
          >
            <Title className="artist" level={4}>
              Solar
            </Title>
            <Button type="link" style={{ textAlign: 'center' }}>Ver más detalles</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default withRouter(Album);
