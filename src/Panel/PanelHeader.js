import React, { Component } from 'react';

class PanelHeader extends Component {
    render() {
        return (
            <div className='panel-header'>{ this.props.title }</div>
        );
    }
}

export default PanelHeader;