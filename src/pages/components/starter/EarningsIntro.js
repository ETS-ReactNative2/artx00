import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EarningsIntro extends Component {
    render() {
        return (
            <div>
                <p className='artx-type-ftn text-white'>Players earn dividends from the auction by bidding and buying shares of Genesis. The price of each share will increase slowly over time. The earlier you bid, the more dividends you earn!</p>
                <button className='btn btn-link text-warning artx-type-tw d-block mx-auto' onClick={this.props.next}>Next</button>
            </div>
        );
    }
}
    
EarningsIntro.propTypes = {
    next: PropTypes.func.isRequired
};

export default EarningsIntro;