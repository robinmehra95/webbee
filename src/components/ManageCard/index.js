import React from 'react';

import Input from '../../components/Input';
import './index.scss';

export default class Header extends React.Component {

    handleTextChange = () => {
        console.log('handleChange')
    };

    render () {
        const {data, value} = this.props;
        return (
            <div className="manage-card">
                <div className="manage-card-head">{data.objectType}</div>
                <Input
                    type="text"
                    value={value}
                    name="objectType"
                    id="objectType"
                    placeholder="Object Type"
                    onChange={this.handleTextChange}
                />
            </div>
        )
    }
}