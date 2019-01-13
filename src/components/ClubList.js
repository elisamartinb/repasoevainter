import React, { Component } from "react";
import PropTypes from "prop-types";
//import './App.css';
import Club from './Club';

class ClubList extends Component {
    render() {
        const { items } = this.props;
        return (
            <ul>
                {items.map((item, i) => {
                    const {name,fa,members} = item;
                    return (
                        <Club key={i} title={name} icon={fa} members={members}/> 
                    )
                })}
            </ul>
        );
    }
}

export default ClubList;

ClubList.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        fa: PropTypes.string.isRequired,
        members: PropTypes.arrayOf(PropTypes.string).isRequired
    })).isRequired
}