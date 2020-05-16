import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { addEquipmentType } from '../../actions/equipmentType';
import { Button } from 'react-bootstrap';
import ManageCard from '../../components/ManageCard';
import './styles.css';

class Manage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentsTypes: this.props.equipments || []
        }
    }
    addType = () => {
        const { equipments } = this.props;
        let data = {
            objectType: '',
            objectTitle: '',
            fields: [
                {
                    type: '',
                    name: '',
                }
            ]
        }
        equipments.push(data);
        this.setState({ equipmentsTypes: equipments });
        this.props.addEquipmentType(equipments);
    };

    handleDataChange = (data, key) => {
        const { equipments } = this.props;
        equipments[key] = data;
        this.setState({ equipmentsTypes: equipments });
        this.props.addEquipmentType(equipments);
    };

    render () {
        const { equipmentsTypes } = this.state;
        let cards = [];
        for(let i = 0; i < equipmentsTypes.length; i++) {
            cards.push(<ManageCard key={i} data={equipmentsTypes[i]} index={i} handleDataChange={this.handleDataChange} />);
        }
        return (
            <div className="manage-wrapper">
                <Button className="add-type" type="button" onClick={this.addType}>ADD TYPE</Button>
                <div className="type-cards">
                    {cards}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        equipments: state.EquipmentsTypeReducer.equipments,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addEquipmentType
        },
        dispatch
    );
}

export default connect( mapStateToProps, mapDispatchToProps)(Manage)