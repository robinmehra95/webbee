import React, { Component } from 'react';

import './styles.scss';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            fieldActive: false,
        };
    }

    // to activate the input field while typing
    activateField = () => {
        this.setState({
            fieldActive: true,
        });
    }

    // to deactivate input only if it's empty
    disableFocus = e => {
        const { name } = e.target;
        if (e.target.value === '') {
            this.setState({ fieldActive: false });
        }
        this.props.validateInput(name);
    }

    // to update the changes in the input and activate it
    updateInputValue = e => {
        const { onChange } = this.props
        this.activateField(e);
        e.preventDefault();
        onChange(e);
    }

    render() {
        const { fieldActive } = this.state;
        const { value, type, placeholder, name, className } = this.props;
        return (
            <div className="field-group input">
                <label
                    // check state the input, whether it is active then apply the class for floating label
                    className={fieldActive ? 'label-active' : ''}
                >
                    {placeholder}
                </label>
                <input
                    className={`floating-label
            ${fieldActive ? 'input-active ' : ''}
            ${className || ''} 
          `}
                    type={type}
                    name={name}
                    value={value}
                    onFocus={this.activateField}
                    onBlur={this.disableFocus}
                    onChange={this.updateInputValue}
                />
            </div>
        );
    }
}

export default Input;
