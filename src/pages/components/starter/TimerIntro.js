import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimerIntro extends Component {
    render() {
        return (
            <div>
                <p className='artx-type-ftn text-white'>This is the difference between the hardcap and the current price. It will serve as the timer for the auction. The hardcap starts high and decreases over time. The auction ends once the accumulated sales of Genesis shares reach or exceed the hardcap.</p>
                <button className='btn btn-link text-warning artx-type-tw d-block mx-auto' onClick={this.props.next}>Next</button>
            </div>
        );
    }
}

TimerIntro.propTypes = {
    next: PropTypes.func.isRequired
};

export default TimerIntro;