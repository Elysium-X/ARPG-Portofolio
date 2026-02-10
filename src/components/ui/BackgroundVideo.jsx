import { useState, useEffect, memo, useRef } from 'react';
import { fireAudioBase64 } from '../../utils/audioAssets';

const BackgroundVideo = memo(({ webmSrc, posterSrc, overlayOpacity = 0.5 }) => {
    const [reduceMotion, setReduceMotion] = useState(false);
    const [isMobileOrSaver, setIsMobileOrSaver] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        // 1. Check Reduced Motion
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updateMotion = (e) => setReduceMotion(e.matches);
        setReduceMotion(motionQuery.matches);
        motionQuery.addEventListener('change', updateMotion);

        // 2. Check Mobile (< 768px for this case) & Data Saver
        const checkPerformanceConstraints = () => {
            const isMobile = window.matchMedia('(max-width: 767px)').matches;
            const isDataSaver = navigator.connection?.saveData === true;
            setIsMobileOrSaver(isMobile || isDataSaver);
        };

        checkPerformanceConstraints();
        window.addEventListener('resize', checkPerformanceConstraints);

        return () => {
            motionQuery.removeEventListener('change', updateMotion);
            window.removeEventListener('resize', checkPerformanceConstraints);
        };
    }, []);

    // Handle Audio Playback separately
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            if (!isMuted) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => console.log("Audio play failed (user interaction needed):", e));
                }
            } else {
                audioRef.current.pause();
            }
        }
    }, [isMuted]);

    // Determine if we should show video
    const shouldPlayVideo = webmSrc && !reduceMotion && !isMobileOrSaver;

    return (
        <>
            {/* Independent Audio Track - Hidden - Uses Base64 Data URI to bypass IDM */}
            <audio ref={audioRef} src={fireAudioBase64} loop preload="auto" />

            <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-gray-900" onContextMenu={(e) => e.preventDefault()}>
                {/* Poster Image (Always rendered as base/fallback) */}
                <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${videoLoaded && shouldPlayVideo ? 'opacity-0' : 'opacity-100'}`}
                >
                    <img
                        src={posterSrc}
                        alt="Atmospheric Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Video (Only rendered if conditions met) */}
                {shouldPlayVideo && (
                    <video
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-90' : 'opacity-0'}`}
                        autoPlay
                        muted={true} // Video is ALWAYS muted now
                        loop
                        playsInline
                        preload="metadata"
                        poster={posterSrc}
                        controlsList="nodownload nofullscreen noremoteplayback"
                        disablePictureInPicture
                        onCanPlayThrough={() => setVideoLoaded(true)}
                    >
                        <source src={webmSrc} type="video/webm" />
                    </video>
                )}

                {/* Dark Overlay for Text Readability */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
                ></div>

                {/* Subtle Fog/Mist Overlay */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
            </div>

            {/* Audio Toggle Button - Rendered outside the background container to ensure high Z-index */}
            <button
                onClick={() => setIsMuted(!isMuted)}
                className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-gold border border-gold/30 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
                aria-label={isMuted ? "Unmute Ambient Sound" : "Mute Ambient Sound"}
            >
                {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 2.388 2.388 0 000-11.668.75.75 0 010-1.06z" />
                        <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 animate-pulse">
                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                    </svg>
                )}
            </button>
        </>
    );
});

export default BackgroundVideo;
