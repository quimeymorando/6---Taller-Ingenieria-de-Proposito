import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const stackItems = [
    { name: "Módulo 1: Ingeniería de Propósito Aplicada", value: "97" },
    { name: "Módulo 2: Ikigai Práctico (Avanzado)", value: "57" },
    { name: "Módulo 3: Diseño Humano y Misión de Vida", value: "57" },
    { name: "Módulo 4: Plan de Acción y Activación", value: "47" },
    { name: "BONUS #1: Workbook de Ejercicios Prácticos", value: "19", isBonus: true },
    { name: "BONUS #2: Comunidad de Soporte", value: "27", isBonus: true },
];

const Offer = () => {
    return (
        <section className="py-24 bg-brand-900 text-white relative overflow-hidden force-text-white">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">
                        Esto es Todo lo Que Te Llevas
                    </h2>
                    <p className="text-brand-500 font-medium tracking-wide uppercase text-sm">
                        OFERTA EXCLUSIVA DE LANZAMIENTO
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl">
                    <div className="space-y-6">
                        {stackItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex justify-between items-center border-b border-white/10 pb-4 ${item.isBonus ? 'text-brand-500 font-bold' : ''}`}
                            >
                                <div className="flex items-center gap-4">
                                    {item.isBonus ? <Gift className="w-6 h-6" /> : <CheckCircle className="w-6 h-6 text-brand-500" />}
                                    <span className="text-lg md:text-xl">{item.name}</span>
                                </div>
                                <span className="text-white/50 font-serif">Valuado en ${item.value}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-col items-center">
                        <div className="text-center mb-8">
                            <span className="block text-white/60 text-lg mb-1">Valor Total Real</span>
                            <span className="text-4xl font-serif text-white/40 line-through decoration-brand-500 decoration-2">$304 USD</span>
                        </div>

                        <Link
                            to="/checkout"
                            className="block w-full md:w-auto bg-brand-500 text-white px-12 py-6 rounded-xl shadow-[0_0_50px_rgba(176,132,18,0.4)] transform hover:scale-105 transition-all duration-300 text-center mb-6"
                        >
                            <span className="block text-sm uppercase tracking-widest mb-1 opacity-90">Acceso Inmediato Hoy Por Solo</span>
                            <span className="text-6xl font-bold font-serif">$33 USD</span>
                        </Link>

                        <p className="text-sm text-center text-white/60 max-w-sm mx-auto">
                            Pago único. Acceso de por vida. Garantía de satisfacción incondicional de 7 días.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
