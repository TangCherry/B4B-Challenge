import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Row, Col,  } from "antd";
import x from '../../assets/images/x.svg';
import "../../assets/styles/card.css";

function Modal() {
  return (
    <div className="modal-body">
      <Row className="card">
        <Col span={8}></Col>
        <Col span={8}>
        <img
            className="x"
            src={x}/>
          <div className="modal">
            <Card
              hoverable
              style={{ width: 240, marginLeft: 110, backgroundColor: 'black', borderColor: 'black' }}
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
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}

export default withRouter(Modal);
