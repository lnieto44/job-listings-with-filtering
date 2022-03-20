import React, { Component } from 'react';


import Cabecera from '../src/components/Cabecera/Cabecera';
import Tarjeta from '../src/components/Tarjeta/Tarjeta';

class Container extends Component {
    
    render() {
        return (
            <div>
            <Cabecera/>
            <div>
            <Tarjeta/>
            </div>
        
        </div>
        );
    }
}

export default Container;
