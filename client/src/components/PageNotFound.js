import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import { SocialNetworks } from './SocialNetworks.js';

export const PageNotFound = () => {
    return (
        <div className='background'>
            <div className='App-header margins'>
                <h1>Error 404. No encontramos la página que buscabas.</h1>
            </div>
            <SocialNetworks />
        </div>
    )
}
