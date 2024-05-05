import React from 'react';
import ReactDOM from 'react-dom';
import travelData from './data.js';

function App() {
    const entries = travelData.map(entry => {
        return (
            <div key={entry.id}>
                <h2>{entry.title}</h2>
                <p>{entry.location} - <a href={entry.googleMapsUrl}>View on Google Maps</a></p>
                <p>{entry.startDate} - {entry.endDate}</p>
                <p>{entry.description}</p>
                <img src={entry.imageUrl} alt={entry.title} />
            </div>
        );
    });

    return <div>{entries}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
