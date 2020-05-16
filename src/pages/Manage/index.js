import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { addEquipmentType } from '../../actions/equipmentType';
import { Button } from 'react-bootstrap';
import ManageCard from '../../components/ManageCard';
import './index.scss';

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
                    value: '',
                    type: 'small'
                }
            ]
        }
        equipments.push(data);
        this.setState({ equipmentsTypes: equipments });
        this.props.addEquipmentType(equipments);
    };

    render () {
        const { equipmentsTypes } = this.state;
        // let data = {}
        console.log('equipments', equipmentsTypes);
        const cards = equipmentsTypes.map((item, key) => {
            return <ManageCard key={key} data={ item } />
        });
        return (
            <div className="manage-wrapper">
                <Button type="button" onClick={this.addType}>ADD TYPE</Button>
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