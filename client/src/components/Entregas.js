import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const Componente = () => {
    return (
        <div className='App-header'>
            <h4>Estamos en Pilar pero hacemos entregas hasta Zona Oeste y Capital Federal</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13155.19399324402!2d-58.983419248718256!3d-34.48263565894924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1651262346909!5m2!1sen!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>
    )
}

export const Entregas = () => {
    return (
        <div>
            <Componente />
        </div>
    )
}
