import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForceGraph3D from './ForceGraph3D';
import '../../styles/scss/data-viz.scss';
import data from '../../styles/assets/blocks.json';
import fomo3d from '../../styles/assets/fomo.json';
import * as THREE from 'three';

class DataVizDynamic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            highlightNodes: []
        };

        this.clickToFocus = this.clickToFocus.bind(this);
        this.CustomObject = this.CustomObject.bind(this);
    };

    clickToFocus(node) {
        const distance = 40;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

        this.fg.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000  // ms transition duration
        );
        this.setState({ highlightNodes: node ? [node] : [] });
        this.fg.nodeThreeObject(node => {
            this.CustomObject(node);
        })
    }

    CustomObject(node) {
        const { highlightNodes } = this.state;
        var obj;
        var geometry = new THREE.SphereGeometry(Math.random() * 4),
            material = new THREE.MeshLambertMaterial({
                color: Math.round(Math.random() * Math.pow(2, 24)),
                transparent: true,
                opacity: 0.75
              });
        if (highlightNodes.indexOf(node) !== -1) {
            obj = new THREE.Mesh(geometry, material);
        } else {
            obj = new THREE.Mesh(
                [
                  new THREE.BoxGeometry(Math.random() * 4, Math.random() * 4, Math.random() * 4),
                  new THREE.ConeGeometry(Math.random() * 2, Math.random() * 4),
                  new THREE.CylinderGeometry(Math.random() * 2, Math.random() * 2, Math.random() * 4),
                  new THREE.DodecahedronGeometry(Math.random() * 2),
                  new THREE.TorusGeometry(Math.random() * 2, Math.random() * 0.4),
                  new THREE.TorusKnotGeometry(Math.random() * 2, Math.random() * 0.4)
                ][Math.floor(Math.random() * 6)],
                new THREE.MeshLambertMaterial({
                  color: Math.round(Math.random() * Math.pow(2, 24)),
                  transparent: true,
                  opacity: 0.75
                })
            )
        }
        return obj;
    }
    render () {
        return (
            <div>
                {
                    this.props.canvasWidth
                    ? <ForceGraph3D 
                        graphData={data}
                        nodeThreeObject={this.CustomObject}
                        linkWidth={2}
                        width={this.props.canvasWidth}
                        height={this.props.canvasHeight}
                        backgroundColor='transparent'
                        showNavInfo={false}
                    />
                    : this.props.fomo
                    ? <ForceGraph3D
                        ref={el => { this.fg = el; }}
                        graphData={fomo3d}
                        nodeThreeObject={this.CustomObject}
                        linkWidth={2}
                        backgroundColor='transparent'
                        showNavInfo={true}
                        onNodeClick={this.clickToFocus}
                    />
                    : <ForceGraph3D 
                        ref={el => { this.fg = el; }}
                        graphData={data}
                        nodeThreeObject={this.CustomObject}
                        linkWidth={2}
                        backgroundColor='transparent'
                        showNavInfo={true}
                        onNodeClick={this.clickToFocus}
                    />  
                }
            </div>
        );
    }
}

DataVizDynamic.propTypes = {
    canvasWidth: PropTypes.number,
    canvasHeight: PropTypes.number,
    fomo: PropTypes.bool
};

export default DataVizDynamic;