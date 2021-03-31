import React from 'react';

function Download() {
    return (
        <div className="download">
            <a href='./CV_Urtubey_Carlos.pdf' target='_blank' rel="noopener noreferrer">
                <i className={'fa fa-download'}></i>
                <p>Descargar CV</p>
            </a>
        </div>
    )
}

export default Download;