import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

class SearchCom extends Component {
    
    render() {
        return (
            <Input.Group compact>
                <Search style={{ width: '50%' }} placeholder="Search here" onSearch={value => console.log(value)} enterButton />
            </Input.Group>
        );
    }
}

export default SearchCom;