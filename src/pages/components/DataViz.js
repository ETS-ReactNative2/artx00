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
import fomo3d from '../../styles/assets/fomo.json';

class DataViz extends Component {
    render () {
        const colors = ["#0021ff","#5d00ff","#a500ff","#ff00b2"];
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
                    : this.props.fomo
                    ? <ForceGraph3D 
                        graphData={fomo3d}
                        nodeColor = {() => colors[Math.floor(Math.random() * colors.length)]}
                        linkWidth={2}
                        backgroundColor='transparent'
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
    canvasHeight: PropTypes.number,
    fomo: PropTypes.bool
};

export default DataViz;