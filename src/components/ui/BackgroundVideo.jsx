import { useState, useEffect, memo, useRef, useCallback } from 'react';
import { fireAudioBase64 } from '../../utils/audio';

const BackgroundVideo = memo(({ webmSrc, posterSrc, overlayOpacity = 0.5 }) => {
    const [videoReady, setVideoReady] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);

    // ── Derive whether video should play from media queries (no extra state) ──
    const [canPlayVideo, setCanPlayVideo] = useState(() => {
        if (typeof window === 'undefined') return false;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        const isDataSaver = navigator.connection?.saveData === true;
        return !prefersReduced && !isMobile && !isDataSaver;
    });

    useEffect(() => {
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const mobileQuery = window.matchMedia('(max-width: 767px)');

        const update = () => {
            const blocked =
                motionQuery.matches ||
                mobileQuery.matches ||
                navigator.connection?.saveData === true;
            setCanPlayVideo(!blocked);
        };

        motionQuery.addEventListener('change', update);
        mobileQuery.addEventListener('change', update);

        return () => {
            motionQuery.removeEventListener('change', update);
            mobileQuery.removeEventListener('change', update);
        };
    }, []);

    // ── Audio toggle ──
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.5;

        if (isMuted) {
            audio.pause();
        } else {
            audio.play().catch(() => { });
        }
    }, [isMuted]);

    const toggleMute = useCallback(() => setIsMuted((m) => !m), []);

    const shouldPlayVideo = webmSrc && canPlayVideo;

    return (
        <>
            {/* Hidden audio track (Base64 to bypass IDM) */}
            <audio ref={audioRef} src={fireAudioBase64} loop preload="auto" />

            <div
                className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-gray-900"
                onContextMenu={(e) => e.preventDefault()}
            >
                {/* Poster fallback */}
                <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${videoReady && shouldPlayVideo ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    <img
                        src={posterSrc}
                        alt="Atmospheric Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Video (only mounted when allowed) */}
                {shouldPlayVideo && (
                    <video
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoReady ? 'opacity-90' : 'opacity-0'
                            }`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={posterSrc}
                        controlsList="nodownload nofullscreen noremoteplayback"
                        disablePictureInPicture
                        onCanPlayThrough={() => setVideoReady(true)}
                    >
                        <source src={webmSrc} type="video/webm" />
                    </video>
                )}

                {/* Dark overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
                />

                {/* Fog overlay */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
            </div>

            {/* Audio toggle button */}
            <button
                onClick={toggleMute}
                className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-gold border border-gold/30 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
                aria-label={isMuted ? 'Unmute Ambient Sound' : 'Mute Ambient Sound'}
            >
                <div className="w-6 h-6 flex items-center justify-center relative">
                    {isMuted ? (
                        <svg key="muted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute">
                            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                        </svg>
                    ) : (
                        <svg key="unmuted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute animate-pulse">
                            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 2.388 2.388 0 000-11.668.75.75 0 010-1.06z" />
                            <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                        </svg>
                    )}
                </div>
            </button>
        </>
    );
});

export default BackgroundVideo;
