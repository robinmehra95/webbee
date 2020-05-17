import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {addEquipments} from "../../actions/equipmentType";

class Home extends React.Component {

    render () {
        const { equipments } = this.props;
        return (
            <div>
                {/*{equipments.map((item, key) => {*/}
                {/*    return <div key={key} >{item.objectType}</div>*/}
                {/*})}*/}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        equipments: state.EquipmentsTypeReducer.equipmentsList,
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