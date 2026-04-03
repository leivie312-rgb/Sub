import React, { useState } from 'react';

const SubliminalAudioGenerator = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [frequency, setFrequency] = useState(440);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [repetitions, setRepetitions] = useState(1);
    const [layers, setLayers] = useState([]);

    const handleFileChange = (event) => {
        setAudioFile(event.target.files[0]);
    };

    const adjustFrequency = (event) => {
        setFrequency(event.target.value);
    };

    const adjustPlaybackSpeed = (event) => {
        setPlaybackSpeed(event.target.value);
    };

    const adjustRepetitions = (event) => {
        setRepetitions(event.target.value);
    };

    const addLayer = () => {
        setLayers([...layers, { frequency: 440, playbackSpeed: 1 }]);
    };

    return (
        <div>
            <h1>Subliminal Audio Generator</h1>
            <input type="file" onChange={handleFileChange} />
            <div>
                <label>Frequency: </label>
                <input type="number" value={frequency} onChange={adjustFrequency} />
            </div>
            <div>
                <label>Playback Speed: </label>
                <input type="number" value={playbackSpeed} onChange={adjustPlaybackSpeed} min="0.5" step="0.1" />
            </div>
            <div>
                <label>Repetitions: </label>
                <input type="number" value={repetitions} onChange={adjustRepetitions} min="1" />
            </div>
            <button onClick={addLayer}>Add Audio Layer</button>
            <ul>
                {layers.map((layer, index) => (
                    <li key={index}>Layer {index + 1} - Frequency: {layer.frequency}, Playback Speed: {layer.playbackSpeed}</li>
                ))}
            </ul>
        </div>
    );
};

export default SubliminalAudioGenerator;