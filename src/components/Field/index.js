import React from 'react';

import Input from "../Input";
import Select from "../Select";
import './styles.css';

export default class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: this.props.name || '',
            type: this.props.type || '',
        }
    }

    handleChange = e => {
        this.setState({name: e.target.value}, () => {
            this.props.handleFieldChange(this.state, this.props.index);
        });
    };

    handleTypeChange = e => {
        this.setState({type: e.target.value}, () => {
            this.props.handleFieldChange(this.state, this.props.index);
        });
    };

    render () {
        const { type, name } = this.state;
        const typeOptions = [{name: ""}, {name: "Small Text"}, {name: "Long Text"}, {name: "Number"}, {name: "Date"}, {name: "Remove"}];
        return (
            <div className="input-select-group">
                <Input
                    type="text"
                    value={name}
                    name="name"
                    onChange={this.handleChange}
                />
                <Select name="type" value={type} onChange={this.handleTypeChange} options={typeOptions} />
            </div>
        )
    }
}