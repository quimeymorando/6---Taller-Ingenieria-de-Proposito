import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <section className="min-h-screen bg-brand-50 relative flex flex-col">
            {/* Header Simple */}
            <div className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 text-brand-800 hover:text-brand-500 transition-colors font-medium">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Volver a la Página Principal</span>
                    </Link>
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-bold">
                        <Lock className="w-4 h-4" />
                        <span>Pago 100% Seguro</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl bg-white rounded-2xl shadow-luxury overflow-hidden border border-gray-100"
                >
                    <div className="p-8 pb-4 text-center bg-brand-900 text-white force-text-white">
                        <h1 className="text-2xl md:text-3xl font-serif mb-2 text-white">Finaliza Tu Inscripción</h1>
                        <p className="text-brand-50 opacity-90 text-sm text-white/80">Estás a un paso de activar tu Ingeniería de Propósito</p>
                    </div>

                    <div className="relative w-full h-[800px] md:h-[700px] bg-white">
                        <iframe
                            src="https://link.apisystem.tech/widget/form/QQrMKqh7RgVL2R5htOTp"
                            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
                            id="inline-QQrMKqh7RgVL2R5htOTp"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="Formulario Taller Ingenieria de Proposito"
                            data-height="845"
                            data-layout-iframe-id="inline-QQrMKqh7RgVL2R5htOTp"
                            data-form-id="QQrMKqh7RgVL2R5htOTp"
                            title="Formulario Taller Ingenieria de Proposito"
                        >
                        </iframe>
                    </div>
                </motion.div>

                <p className="mt-8 text-center text-gray-400 text-xs">
                    Tus datos están protegidos por encriptación SSL de 256 bits.
                </p>
            </div>
        </section>
    );
};

export default Checkout;
