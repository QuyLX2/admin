import React, { Component } from 'react';
import { Input, Select } from 'antd';

const { Option } = Select;
const { Search } = Input;

class SearchCom extends Component {
    
    render() {
        return (
            <Input.Group compact>
                <Select defaultValue="Select field" style={{ width: '15%' }}>
                    <Option value="Content">Content</Option>
                    <Option value="User profile">User profile</Option>
                </Select>
                <Search style={{ width: '50%' }} placeholder="Search here" onSearch={value => console.log(value)} enterButton />
            </Input.Group>
        );
    }
}

export default SearchCom;