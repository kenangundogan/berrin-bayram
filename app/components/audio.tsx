"use client"

import { useRef, useState, useEffect } from 'react';

const Audio = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        if (audioRef.current && audioRef.current.paused) {
            setIsPlaying(false);
        }

        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: 'Wedding Ceremony',
              artist: 'Berrin ve Bayram',
              album: 'Wedding Ceremony',
              artwork: [
                { src: '/images/manifest/192x192.png', sizes: '96x96', type: 'image/png' },
                { src: '/images/manifest/192x192.png', sizes: '128x128', type: 'image/png' },
                { src: '/images/manifest/192x192.png', sizes: '192x192', type: 'image/png' },
                { src: '/images/manifest/192x192.png', sizes: '256x256', type: 'image/png' },
                { src: '/images/manifest/192x192.png', sizes: '384x384', type: 'image/png' },
                { src: '/images/manifest/512x512.png', sizes: '512x512', type: 'image/png' },
              ]
            });
          }
    }, []);

    return (
        <div className='fixed z-50 bottom-0 right-0 bg-white w-10 h-10 overflow-hidden flex justify-center items-center'>
            <audio ref={audioRef} loop autoPlay onPlay={playAudio} onPause={pauseAudio}>
                <source src="/audio/wedding.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {
                isPlaying
                    ? <button className="fade" onClick={pauseAudio}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="currentColor" />
                        </svg>
                    </button>
                    : <button className="fade" onClick={playAudio}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                        </svg>
                    </button>
            }
        </div>
    );
};

export default Audio;