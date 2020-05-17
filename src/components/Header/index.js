import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Navbar, Nav } from 'react-bootstrap';

import './styles.css';

class Header extends React.Component {
    render () {
        const { equipments } = this.props;
        const links = equipments.map((item, key) => {
            return <Nav.Link key={key} href={`/${item.objectType}`}>{item.objectType}</Nav.Link>
        });
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto my-nav">
                            <Nav.Link href="/">All</Nav.Link>
                            {links}
                            <Nav.Link href="/manage-types">Manage Types</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
        },
        dispatch
    );
}

export default connect( mapStateToProps, mapDispatchToProps)(Header)