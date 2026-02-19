import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
    return (
        <section className="py-24 bg-white text-text-main relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-900 leading-tight">
                        ¿Por Qué Algunos Viven en <span className="text-brand-500 italic">Abundancia</span> mientras Tú te sientes Perdido?
                    </h2>
                    <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-lg leading-relaxed text-gray-700"
                    >
                        <p>
                            <span className="font-bold text-brand-900 block mb-2">LA MENTE DE UN INGENIERO. EL ALMA DE UN LÍDER.</span>
                            No diseño edificios, diseño <strong>Sistemas de Transformación</strong>. Aplico la precisión, el orden y la estrategia de la ingeniería para edificar tu legado.
                        </p>
                        <p>
                            Durante años viví en lo que llamo <em>"El Error de Cálculo"</em>. Tenía el éxito externo, pero internamente había un vacío que ninguna carrera podía llenar.
                        </p>
                        <p className="border-l-4 border-brand-500 pl-4 py-1 italic text-brand-800 bg-brand-50">
                            "La Espiritualidad sin Acción es Alucinación. El Dinero es Energía de Expansión."
                        </p>
                        <p>
                            Descubrí que no necesitas "arreglarte" porque no estás roto. Necesitas <strong>ASUMIRTE</strong>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        {/* Image representing Joaquin/Transformation */}
                        <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative">
                            {/* Overlay for brand color tint */}
                            <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply pointer-events-none z-10" />
                            <img 
                                src="https://assets.cdn.filesafe.space/uuaiNCJCRvymWQ2ejuex/media/698b6cc38682155edc61e55e.png" 
                                alt="Joaquín Alterman"
                                className="w-full h-full object-cover relative z-0"
                            />
                        </div>
                        {/* Quote Card Overlay */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-luxury rounded-lg max-w-xs border border-gray-100 hidden md:block">
                            <p className="font-serif italic text-brand-900 text-lg">
                                "Dios necesita tu entusiasmo, no tu sacrificio."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Story;
