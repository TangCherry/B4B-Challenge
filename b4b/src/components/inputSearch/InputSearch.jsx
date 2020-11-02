import React from 'react';
import { Input, Typography } from 'antd';
import '../../assets/styles/search.css';

const { Search } = Input;
const { Title } = Typography;

function InputSearch() {
    return (
        <>
        <div className="search-input">
            <Title level={3} className="search-input">Introduce un artista</Title>
        <Search 
            style={{ width: 400 }}
           allowClear
           enterButton="Buscar"
           size="large"
           />
        </div>
        </>
    )
}

export default InputSearch
