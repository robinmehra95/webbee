import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {addEquipments} from "../../actions/equipmentType";
import EquipmentCard from "../../components/EquipmentCard";
import Button from "react-bootstrap/Button";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.equipments || []
        }
    }

    makeData = type => {
        let { equipmentTypes } = this.props;

        let index = 0
        for (let i = 0; i < equipmentTypes.length; i++) {
            if(equipmentTypes[i].objectType === type) {
                index = i
            }
        }

        let fieldTypes = equipmentTypes[index].fields
        let fields = [];
        for (let i = 0; i < fieldTypes.length; i++) {
            let field = {
                type: fieldTypes[i].type,
                name: fieldTypes[i].name,
                value: ''
            }
            fields.push(field);
        }

        return {
            type: type,
            fields: fields
        }
    };

    addItem = type => {
        const item = this.makeData(type);
        const { data } = this.state;
        data.push(item);
        this.setState({data});
        this.props.addEquipments(data)
    };

    handleDataChange = (data, key) => {
        const { equipments } = this.props;
        equipments[key] = data;
        this.props.addEquipments(equipments);
    };

    handleRemove = key => {
        const { equipments } = this.props;
        equipments.splice(key, 1);
        this.setState({data: equipments});
        this.props.addEquipments(equipments);
    };

    render () {
        const { equipments } = this.props;
        const buttons = [];
        const cards = [];
        for (let i = 0; i < equipments.length; i++) {
            cards.push(
                <EquipmentCard key={i} data={equipments[i]} index={i} handleRemove={this.handleRemove} handleDataChange={this.handleDataChange} />
            )
            if(!buttons.includes(equipments[i].type)) {
                buttons.push(equipments[i].type);
            }
        }

        const renderButtons = buttons.map((button, key) => {
            return <Button key={key} className="add-equipment" onClick={() => this.addItem(button)}>ADD {button}</Button>

        });
        return (
            <div className="equipment-wrapper">
                {renderButtons}
                <div className="equipment-cards">
                    {cards}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        equipments: state.EquipmentsTypeReducer.equipmentsList,
        equipmentTypes: state.EquipmentsTypeReducer.equipments,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addEquipments
        },
        dispatch
    );
}

export default connect( mapStateToProps, mapDispatchToProps)(Home)