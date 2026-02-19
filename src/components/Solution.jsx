import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Zap, Target, Star } from 'lucide-react';

const benefits = [
    {
        icon: <Compass className="w-8 h-8" />,
        title: "Claridad Direccional",
        desc: "Se ordena tu energía y tus decisiones. Dejas de dudar y empiezas a avanzar con certeza."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Energía Alineada",
        desc: "Avanzas sin empujarte. La fricción desaparece cuando actúas desde tu diseño original."
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: "Magnetismo Natural",
        desc: "Dejan de atraerte caminos que no son para vos y conectas con oportunidades reales."
    },
    {
        icon: <Star className="w-8 h-8" />,
        title: "Identidad Asumida",
        desc: "Tu vida empieza a alinearse con quien realmente eres, no con quien te dijeron que debías ser."
    }
];

const Solution = () => {
    return (
        <section className="py-24 bg-brand-50 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-6">
                        ¿Qué empieza a pasar cuando <span className="text-brand-500">Asumes tu Propósito</span>?
                    </h2>
                    <p className="text-lg text-gray-600">
                        No es magia, es ingeniería aplicada a la consciencia. Cuando el sistema está alineado, la abundancia es el resultado inevitable.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-luxury transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-900 mb-3 font-serif">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl font-serif italic text-brand-800">
                        "Ya no estarás perdido. Tu propósito está golpeando la puerta."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Solution;
