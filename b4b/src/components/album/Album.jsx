import React, { useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import meteora from '../../assets/images/meteora.jpg';
import lol from '../../assets/images/1999.jpg';
import spit from '../../assets/images/spit it out.jpg';
import '../../assets/styles/album.css';

const { Title } = Typography;

function Album() {
    return (
        <>
        <Row>
            <Col span={8}>
                <img 
                className="album"
                src={meteora}
                />
                <Title className="artist" level={4}>Linkin Park</Title>
            </Col>
            <Col span={8}>
                <img 
                className="album"
                src={lol}
                />
                <Title className="artist" level={4}>Love of Lesbian</Title>
            </Col>
            <Col span={8}>
                <img 
                className="album"
                src={spit}
                />
                <Title className="artist" level={4}>Solar</Title>
            </Col>
        </Row>
        </>
    )
}

export default Album
