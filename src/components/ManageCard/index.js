import React from 'react';

import Input from '../../components/Input';
import Field from '../../components/Field';
import Select from '../../components/Select';
import { Button } from 'react-bootstrap';
import './index.css';

export default class ManageCard extends React.Component {

    constructor(props) {
        super(props);
        const { data } = this.props;
        this.state = {
            objectType: data.objectType || '',
            objectTitle: data.objectTitle || '',
            fields: data.fields || [],
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value}, () => {
            this.props.handleDataChange(this.state, this.props.index)
        })
    };
    handleTitleChange = e => {
        this.setState({objectTitle: e.target.value}, () => {
            this.props.handleDataChange(this.state, this.props.index)
        })
    };

    handleFieldChange = (data, index) => {
        let {fields} = this.state;
        fields[index] = data;
        this.setState({fields}, () => {
            this.props.handleDataChange(this.state, this.props.index)
        });
    };

    render () {
        const { data, handleRemove, index } = this.props;
        const { objectType, objectTitle, fields } = this.state;
        const fieldsList = [];
        for(let i = 0; i < fields.length; i++) {
            fieldsList.push(
                <div key={i} className="input-group-field">
                    <Field index={i} name={fields[i].name} type={fields[i].type} handleFieldChange={this.handleFieldChange}  />
                </div>
            )
        }
        return (
            <div className="manage-card">
                <div className="manage-card-head">
                    <span>{data.objectType}</span>
                    <Button variant="outline-danger" onClick={() => handleRemove(index)} className="remove">X</Button>
                </div>
                <div className="input-group-field">
                    <Input
                        type="text"
                        value={objectType}
                        name="objectType"
                        id="objectType"
                        placeholder="Object Type"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-group-field">
                    <div className="select-wrapper">
                        <label>Object Title</label>
                        <Select name="objectTitle" value={objectTitle} onChange={this.handleTitleChange} options={fields} />
                    </div>
                </div>
                <div className="fields-wrap">
                    <label>Fields</label>
                    {fieldsList}
                </div>
                <Button onClick={() => this.handleFieldChange({name: '', type: ''}, fields.length)} type="button">ADD FIELD</Button>
            </div>
        )
    }
}