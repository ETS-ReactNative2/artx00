import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Start extends Component {
    render() {
        return (
            <div>
                <p className='artx-type-ftn text-white'>Welcome to the world of Decentralism! <i>Genesis</i>, the first DArt on the Ethereum blockchain, will be created and auctioned simultaneously.</p>
                <p className='artx-type-st text-white font-weight-bold text-warning'>Take 30 seconds to go through a brief tutorial?</p>
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-link text-white artx-type-tw' onClick={this.props.skip}>Skip</button>
                    <button className='btn btn-link text-warning artx-type-tw' onClick={this.props.start}>Start</button>
                </div>
            </div>
        );
    }
}

Start.propTypes = {
    skip: PropTypes.func.isRequired,
    start: PropTypes.func.isRequired
};

export default Start;
