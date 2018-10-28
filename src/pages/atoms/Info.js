import React from 'react';
import PropTypes from 'prop-types';
import helpicon from '../../styles/assets/help.svg';

const Info = ({content}) => {
    console.log(content);
    return (
        <button className='align-baseline ml-1 position-relative artx-help-icon'>
            <img src={helpicon} alt='info tip'/>
            <span className='position-absolute'>This is the difference between the hardcap and the current price. It will serve as the timer for the auction. The hardcap starts high and decreases over time. The auction ends once the accumulated sales of Genesis shares reach or exceed the hardcap.</span>
        </button>
    )
};

export default Info;

Info.propTypes = {
    content: PropTypes.string.isRequired
}