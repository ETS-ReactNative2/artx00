/*
id: wallet address,
size: shares,
color: tbd, maybe ip? maybe some math formula with wallet address?

source: referral address,
target: referred address
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForceGraph3D from './ForceGraph3D';
import '../../styles/scss/data-viz.scss';
import data from '../../styles/assets/blocks.json';

class DataViz extends Component {
    // constructor(props) {
    //     super(props);
    
    //     this.genRandomTree = this.genRandomTree.bind(this);
    // }
    
    // genRandomTree(N) {
    //     return {
    //       nodes: [...Array(N).keys()].map(i => ({ id: i })),
    //         links: [...Array(N).keys()]
    //       .filter(id => id)
    //       .map(id => ({
    //         source: id,
    //         target: Math.round(Math.random() * (id-1))
    //       }))
    //     };
    //   }

    render () {
        //const GROUPS = 12;
        //const gData = this.genRandomTree(300);
        return (
            <div>
                {
                    this.props.canvasWidth
                    ? <ForceGraph3D 
                        graphData={data}
                        nodeAutoColorBy="user"
                        linkWidth={2}
                        width={this.props.canvasWidth}
                        height={this.props.canvasHeight}
                        backgroundColor='transparent'
                        showNavInfo={false}
                    />
                    : <ForceGraph3D 
                        graphData={data}
                        nodeAutoColorBy="user"
                        linkWidth={2}
                        backgroundColor='transparent'
                    />  
                }
            </div>
        );
    }
}

DataViz.propTypes = {
    canvasWidth: PropTypes.number,
    canvasHeight: PropTypes.number
};

export default DataViz;