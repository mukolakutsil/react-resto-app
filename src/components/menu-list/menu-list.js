import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuError, addedToCart, openInfo } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import View from './view';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();

        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuError());
    }


    render() {

        const { loading, menuItems, error, addedToCart, openInfo } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <Error />
        }

        return <View addedToCart={addedToCart} openInfo={openInfo} menuItems={menuItems} />
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    openInfo
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));