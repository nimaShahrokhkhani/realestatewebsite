import React from 'react';
import './Market.css';
import Routes from './Routes';
import {withTranslation, Trans} from 'react-i18next'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBox from '../components/searchBar/SearchBox'
import makeExpanding from '../components/searchBar/expanding-animation';
import {connect} from "react-redux";
import {setUser, setState} from "../components/redux/actions";
import Services from "../utils/Services";

const ExpandingSearchBox = makeExpanding(SearchBox);

class Market extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <Routes/>
        );
    }
}

const mapStateToProps = state => {
    const user = state.user;
    const products = state.products;
    return {user, products};
}

export default connect(mapStateToProps, {setUser, setState})(withTranslation()(Market));
