import React, { Component } from 'react';

import './styles.css';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    render() {
        const { options, onChange, value } = this.props;
        return (
            <select onChange={onChange} value={value}>
                {options.map((option, key) => {
                    return <option key={key} value={option.name}>{option.name}</option>
                })}
            </select>
        );
    }
}

export default Input;
