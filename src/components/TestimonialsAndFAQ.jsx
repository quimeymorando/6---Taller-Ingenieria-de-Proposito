import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

const testimonials = [
    {
        quote: "Pensé que el propósito era algo complejo. Nunca lo había sentido tan claro. Después del taller empecé a mover cosas que tenía trabadas hacía mucho.",
        author: "Marina A.",
        location: "Córdoba, Argentina"
    },
    {
        quote: "Pude ver con exactitud qué es mío y qué no. Dejé de cargar cosas ajenas. Me siento alineada.",
        author: "Diego R.",
        location: "Uruguay"
    },
    {
        quote: "Desde la primera hora ya estaba llorando de alivio. Te ordena por dentro. Es impresionante la simpleza y profundidad.",
        author: "Lucía P.",
        location: "Buenos Aires"
    }
];

const faqs = [
    { q: "¿Es para mí si estoy 'confundido' o con poca energía?", a: "Absolutamente. Este taller está diseñado específicamente para salir de la confusión y recuperar tu energía vital." },
    { q: "¿Necesito experiencia previa en meditación?", a: "No. Las herramientas son prácticas y guiadas paso a paso. No necesitas ser un experto espiritual." },
    { q: "¿Qué pasa si no me sirve?", a: "Tienes una garantía incondicional de 7 días. Si no sientes que vale 10 veces lo que pagaste, te devolvemos el dinero sin preguntas." }
];

const TestimonialsAndFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 bg-white text-text-main">
            <div className="max-w-6xl mx-auto px-6">

                {/* Testimonials */}
                <div className="mb-32">
                    <h2 className="text-3xl md:text-4xl font-serif text-center text-brand-900 mb-16">
                        Historias Reales de <span className="text-brand-500">Transformación</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-brand-50 p-8 rounded-xl shadow-sm border border-brand-100"
                            >
                                <div className="flex gap-1 text-brand-500 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="italic text-gray-700 mb-6 font-serif leading-relaxed">"{t.quote}"</p>
                                <div>
                                    <p className="font-bold text-brand-900">{t.author}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">{t.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-center text-brand-900 mb-12">
                        Preguntas Frecuentes
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-brand-300">
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex justify-between items-center p-6 bg-white hover:bg-brand-50/50 transition-colors text-left"
                                >
                                    <span className="font-medium text-lg text-brand-900">{faq.q}</span>
                                    {openIndex === idx ? <ChevronUp className="text-brand-500" /> : <ChevronDown className="text-gray-400" />}
                                </button>
                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="bg-brand-50 px-6"
                                        >
                                            <p className="py-6 text-gray-600 leading-relaxed border-t border-gray-100">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialsAndFAQ;
