// audioProcessor.js

/**
 * Web Audio API utilities for subliminal audio processing.
 */

class AudioProcessor {
    constructor() {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
    }

    /**
     * Create a carrier wave.
     * @param {number} frequency - Frequency of the carrier wave in Hz.
     * @returns {AudioBufferSourceNode} - The carrier wave source node.
     */
    createCarrierWave(frequency) {
        const oscillator = this.context.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, this.context.currentTime);
        return oscillator;
    }

    /**
     * Modulate frequency.
     * @param {AudioBufferSourceNode} carrier - The carrier wave.
     * @param {number} modulationFrequency - Frequency of modulation in Hz.
     */
    frequencyModulation(carrier, modulationFrequency) {
        const modulator = this.createCarrierWave(modulationFrequency);
        modulator.connect(carrier.frequency);
        modulator.start();
    }

    /**
     * Adjust playback speed.
     * @param {AudioBufferSourceNode} source - The audio source.
     * @param {number} playbackSpeed - Speed multiplier (1 = normal speed).
     */
    adjustPlaybackSpeed(source, playbackSpeed) {
        source.playbackRate.value = playbackSpeed;
    }

    /**
     * Create binaural beats.
     * @param {number} leftFrequency - Frequency of the left audio channel.
     * @param {number} rightFrequency - Frequency of the right audio channel.
     * @returns {GainNode[]} - The left and right audio channels as GainNodes.
     */
    createBinauralBeats(leftFrequency, rightFrequency) {
        const leftChannel = this.createCarrierWave(leftFrequency);
        const rightChannel = this.createCarrierWave(rightFrequency);
        return [leftChannel, rightChannel];
    }

    /**
     * Load audio file.
     * @param {string} url - The URL of the audio file.
     * @returns {Promise<AudioBuffer>} - The loaded audio buffer.
     */
    async loadAudioFile(url) {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return await this.context.decodeAudioData(arrayBuffer);
    }
}

// Example usage:
// const audioProcessor = new AudioProcessor();
// const carrier = audioProcessor.createCarrierWave(440);
// carrier.start(); // Start the oscillator
