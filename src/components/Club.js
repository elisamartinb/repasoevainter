import React, { Component } from "react";
import PropTypes from "prop-types";
//import './App.css';


class Club extends Component {
    render() {
        const { title, icon, members } = this.props;
        console.log('club', this.props.title);
        return (
            <li>
                <h1>{title}</h1>
                <i className={icon}></i>
                <ul>
                    {members.map((member, i) => {
                        return <li key={i}>{member}</li>;
                    })}
                </ul>
            </li>
        );
    }
}

Club.PropTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Club;