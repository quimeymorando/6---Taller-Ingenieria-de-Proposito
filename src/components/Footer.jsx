import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-800 py-12 text-center text-gray-400 text-sm">
            <div className="max-w-6xl mx-auto px-6">
                <p className="mb-4">&copy; {new Date().getFullYear()} Joaquín Alterman. Todos los derechos reservados.</p>
                <div className="flex justify-center gap-6">
                    <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
