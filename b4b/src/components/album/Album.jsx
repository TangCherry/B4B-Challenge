import React, { useEffect } from 'react';
import { Row, Col, Typography, Card } from 'antd';
import '../../assets/styles/album.css';

const { Title } = Typography;

function Album() {
    return (
        <>
        <Row>
            <Col span={8} style={{ paddingTop: 15, paddingRight: 15, paddingLeft: 15 }}>
                <Card
                hoverable
                cover={
                    <img 
                    className="album"
                    alt="meteora"
                    src={
                        "https://images-na.ssl-images-amazon.com/images/I/71-nhMkC-vL._SX522_.jpg"
                    }
                    />
                }
                >
                <Title className="artist" level={4}>Linkin Park</Title>
                </Card>
            </Col>
            <Col span={8} style={{ paddingTop: 15, paddingRight: 15, paddingLeft: 15 }}>
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
                    <Title className="artist" level={4}>Love of Lesbian</Title>
                </Card>
            </Col>
            <Col span={8} style={{ paddingTop: 15, paddingRight: 15, paddingLeft: 15 }}>
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
                    <Title className="artist" level={4}>Solar</Title>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default Album
