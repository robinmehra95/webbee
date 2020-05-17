import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button } from 'react-bootstrap';

import { addEquipments } from '../../actions/equipmentType';
import EquipmentCard from "../../components/EquipmentCard";
import './index.css';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            data: this.props.equipmentList || []
        }
    }

    componentDidMount() {
        const { equipmentTypes, match: { params } } = this.props;
        let index = 0
        for (let i = 0; i < equipmentTypes.length; i++) {
            if(equipmentTypes[i].objectType === params.equipment) {
                index = i
            }
        }
        this.setState({index});
    }

    makeData = () => {
        let { equipmentTypes } = this.props;
        let { index } = this.state;
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
            type: equipmentTypes[index].objectType,
            fields: fields
        }
    };

    addEquipment = () => {
        const item = this.makeData();
        const { data } = this.state;
        data.push(item);
        this.setState({data});
        this.props.addEquipments(data)
    };

    handleDataChange = (data, key) => {
        const { equipmentList } = this.props;
        equipmentList[key] = data;
        this.setState({ data: equipmentList });
        this.props.addEquipments(equipmentList);
    };

    render () {
        const { match: { params }, equipmentList } = this.props;
        let cards = [];
        for (let i = 0; i < equipmentList.length; i++) {
            if(equipmentList[i].type === params.equipment) {
                cards.push(
                    <EquipmentCard key={i} data={equipmentList[i]} index={i} handleDataChange={this.handleDataChange} />
                )
            }
        }
        return (
            <div className="equipment-wrapper">
                <Button className="add-equipment" onClick={this.addEquipment}>ADD {params.equipment}</Button>
                <div className="equipment-cards">
                    {cards}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        equipmentTypes: state.EquipmentsTypeReducer.equipments,
        equipmentList: state.EquipmentsTypeReducer.equipmentsList,
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