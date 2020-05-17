import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {addEquipments, addEquipmentType} from '../../actions/equipmentType';
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

    handleRemove = key => {
        const { equipments, equipmentList } = this.props;
        const objectType = equipments[key].objectType
        equipments.splice(key, 1);
        const newEquipmentList = equipmentList.filter((item) => {
            return item.type !== objectType
        });
        this.setState({equipments});
        this.props.addEquipmentType(equipments);
        this.props.addEquipments(newEquipmentList);
    };

    render () {
        const { equipmentsTypes } = this.state;
        let cards = [];
        for(let i = 0; i < equipmentsTypes.length; i++) {
            cards.push(
                <ManageCard
                    key={i}
                    data={equipmentsTypes[i]}
                    index={i}
                    handleDataChange={this.handleDataChange}
                    handleRemove={this.handleRemove}
                />
            );
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
        equipmentList: state.EquipmentsTypeReducer.equipmentsList,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addEquipmentType,
            addEquipments
        },
        dispatch
    );
}

export default connect( mapStateToProps, mapDispatchToProps)(Manage)