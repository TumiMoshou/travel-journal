import React from 'react';
import ReactDOM from 'react-dom';
import travelData from './data.js';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
    const entries = travelData.map(entry => {
        return (
            <div key={entry.id} className="entry">
                <img src={entry.imageUrl} alt={entry.title} />
                <h2>{entry.title}</h2>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'teal' }} /> <strong>{entry.location}</strong> - <a href={entry.googleMapsUrl}>View on Google Maps</a></p>
                <p><strong>{entry.startDate} - {entry.endDate}</strong></p>
                <p>{entry.description}</p>
            </div>
        );
    });

    return (
        <div>
            <header className="journal-banner">
                <FontAwesomeIcon icon={faGlobe} style={{ color: 'white' }} /> my travel journal.
            </header>
            <div className="entries-container">{entries}</div>
        </div>
    ); 
}

ReactDOM.render(<App />, document.getElementById('root'));
