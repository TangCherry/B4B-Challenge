import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Typography, Card, Button } from "antd";
import Modal from 'react-modal';
import "../../assets/styles/album.css";
import "../../assets/styles/card.css";

const { Title } = Typography;

const fetchURL = 'https://raw.githubusercontent.com/TangCherry/B4B-Challenge/main/b4b/src/assets/data/music.json'
const getData = () => fetch(fetchURL).then(data => data.json());

function Album() {
  const [isOpen, setIsOpen] = useState(false);
  const [music, setMusic] = useState([]);

  useEffect(() =>{
    getData().then(data => setMusic(data));
  }, [])

  // useEffect(() => {
  //     const getData = async () => {
  //   const data = await fetch('https://raw.githubusercontent.com/TangCherry/B4B-Challenge/main/b4b/src/assets/data/music.json')
  //   const albums = await data.json()
  //   // console.log(albums, 'la otra pendejada')
  //   setMusic(albums)
  // }
  //   getData()
  // }, [])
  // console.log(music, 'chingadera')

  // useEffect(() => {
  //     const getData = async () => {
  //   const data = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const albums = await data.json()
  //   // console.log(albums)
  //   setMusic(albums)
  // }
  // getData()
  // }, [])

  function toggleModal() {
      setIsOpen(!isOpen);
  }
  return (
    <>
      <Row>
        {console.log(music, 'cosa del mal')}
        {music 
        ? music.map(item => {
          <Col
          span={8}
          style={{ paddingTop: 15, paddingRight: 15, paddingLeft: 15 }}
        >
          <Card
          key={item.id}
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
        })
      : <p>Cargando...</p>}
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
      </Row>
    </>
  );
}

export default withRouter(Album);
