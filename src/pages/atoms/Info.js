import React from 'react';
import PropTypes from 'prop-types';
import helpicon from '../../styles/assets/help.svg';

const Info = ({content}) => {
    console.log(content);
    return (
        <button className='align-baseline ml-1 position-relative artx-help-icon'>
            <img src={helpicon} alt='info tip'/>
        </button>
    )
};

export default Info;

Info.propTypes = {
    content: PropTypes.string.isRequired
}