import React from 'react';
import ReactDOM from 'react-dom';
import travelData from './data.js';
import './style.css';

function App() {
    const entries = travelData.map(entry => {
        return (
            <div key={entry.id} className="entry">
                <img src={entry.imageUrl} alt={entry.title} />
                <h2>{entry.title}</h2>
                <p>{entry.location} - <a href={entry.googleMapsUrl}>View on Google Maps</a></p>
                <p>{entry.startDate} - {entry.endDate}</p>
                <p>{entry.description}</p>
            </div>
        );
    });

    return <div>{entries}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
