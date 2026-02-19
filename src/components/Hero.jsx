import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    }

    // Componente de Botones Reutilizable
    const CTAButtons = ({ className }) => (
        <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${className}`}>
            <Link
                to="/checkout"
                className="relative overflow-hidden group bg-brand-500 hover:bg-brand-500/90 text-white px-8 py-4 rounded-md font-bold shadow-luxury transition-all duration-300 transform hover:-translate-y-1 block text-center md:inline-block"
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    ACCEDER POR 33 USD <span className="text-xs opacity-75 line-through">$197</span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <button
                onClick={togglePlay}
                className="flex items-center justify-center gap-3 text-white/80 hover:text-white transition-colors duration-300 px-6 py-4"
            >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                <span>{isPlaying ? "Pausar Video" : "Ver Video Explicativo"}</span>
            </button>
        </div>
    );

    return (
        <section className="relative w-full min-h-screen bg-brand-900 text-white overflow-hidden flex flex-col items-center justify-center py-20 px-4 force-text-white">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-800 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto z-10 w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left space-y-6"
                >
                    <div className="inline-block px-4 py-1 border border-brand-500 rounded-full bg-brand-800/50 backdrop-blur-sm text-brand-500 font-medium text-sm tracking-wide">
                        MÉTODO ALTERMAN
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
                        DESPIERTA Y <span className="text-brand-500 italic">ASUME</span> TU PROPÓSITO HOY
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 font-light max-w-lg">
                        Deja de buscar fuera y empieza a vivir desde tu verdadera identidad. La ingeniería aplicada al alma.
                    </p>

                    {/* Botones - Visible SOLO en Desktop */}
                    <CTAButtons className="hidden md:flex" />

                    <p className="text-xs text-white/40 mt-4 hidden md:block">
                        * Garantía de devolución de 7 días. Resultados comprobados.
                    </p>
                </motion.div>

                {/* VSL / Video Real */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative flex flex-col gap-8"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-black flex items-center justify-center group">
                        <video
                            ref={videoRef}
                            poster="https://storage.googleapis.com/msgsndr/uuaiNCJCRvymWQ2ejuex/media/693aabddeac0a85d80fa525c.jpg"
                            className="w-full h-full object-cover"
                            playsInline
                            onClick={togglePlay}
                        >
                            <source src="https://storage.googleapis.com/msgsndr/uuaiNCJCRvymWQ2ejuex/media/693aab6b517c3a13d8531d80.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Custom Play Button Overlay */}
                        {!isPlaying && (
                            <div
                                onClick={togglePlay}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-all cursor-pointer z-10"
                            >
                                <div className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center pl-1 shadow-luxury hover:scale-110 transition-transform duration-300">
                                    <Play className="w-8 h-8 text-white fill-current" />
                                </div>
                            </div>
                        )}

                        {/* Custom Mute Control */}
                        <button
                            onClick={toggleMute}
                            className="absolute bottom-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                        >
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Botones - Visible SOLO en Mobile (Debajo del Video) */}
                    <div className="md:hidden">
                        <CTAButtons className="flex" />
                        <p className="text-xs text-white/40 mt-4 text-center">
                            * Garantía de devolución de 7 días.
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-10 right-10 w-full h-full border border-white/5 rounded-2xl transform rotate-3" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
