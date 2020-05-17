import React from 'react';

import Input from '../../components/Input';
import './index.css';
import {Button} from "react-bootstrap";

export default class EquipmentCard extends React.Component {

    constructor(props) {
        super(props);
        const { data } = this.props;
        this.state = {
            type: data.type || '',
            fields: data.fields || [],
        }
    }

    handleFieldChange = (e, index) => {
        const { data } = this.props;
        const { fields } = data;
        fields[index].value = e.target.value;
        this.setState({fields}, () => {
            this.props.handleDataChange(this.state, this.props.index)
        });
    };

    render () {
        const { data, index, handleRemove } = this.props;
        const { fields } = data;
        const fieldsList = [];
        for(let i = 0; i < fields.length; i++) {
            fieldsList.push(
                <div key={i} className="input-group-field">
                    <Input
                        index={i}
                        name={fields[i].name}
                        type="text"
                        placeholder={fields[i].name}
                        value={fields[i].value}
                        onChange={this.handleFieldChange}
                    />
                </div>
            )
        }
        return (
            <div className="equipment-card">
                <div className="equipment-card-head">
                    <span>{data.type} - {data.fields[0].value}</span>
                    <Button variant="outline-danger" onClick={() => handleRemove(index)} className="remove">X</Button>
                </div>
                {fieldsList}
            </div>
        )
    }
}