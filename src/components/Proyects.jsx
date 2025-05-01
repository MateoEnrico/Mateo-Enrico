import React, { useState } from 'react';;

const Proyects = () => {
    const images = [
        '/BJ-Inicio.png',
        '/BJ-Tienda.png',
        '/BJ-Carrito.png',
        '/BJ-Checkout.png'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return(
        <section id="proyects" className="section bg-secondary-50">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <h2 className="section-title">
                        Proyectos
                    </h2>
                </div>
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="card border-l-4 border-accent-500 hover:border-accent-600">
                            <h3 className="text-xl font-semibold text-accent-600">Blackjack Clothes – Tienda online con WordPress + WooCommerce</h3>
                            <p className="text-lg font-medium text-secondary-700">Desarrollé de forma integral esta tienda e-commerce usando WordPress. Personalicé el diseño para reflejar la identidad de la marca, configuré WooCommerce con pasarela de pagos (Mercado Pago), métodos de envío, y gestioné el catálogo completo de productos. Implementé prácticas de diseño responsive, seguridad básica y optimización de velocidad. El <a href="www.blackjackclothes.com.ar" target="_blank" rel="noopener noreferrer" style={{color: 'blue', textDecoration: 'underline'}}>sitio</a> está publicado, funcional y preparado para escalar.</p>
                            <div style={styles.sliderContainer}>
                                <button style={{...styles.arrowButton, ...styles.prevButton}} onClick={prevSlide}>&#10094;</button>
                                <img src={images[currentIndex]} alt="slider" style={styles.image} />
                                <button style={{...styles.arrowButton, ...styles.nextButton}} onClick={nextSlide}>&#10095;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="card border-l-4 border-accent-500 hover:border-accent-600">
                            <h3 className="text-xl font-semibold text-accent-600">Automatización de generación de preguntas con n8n + Gemini</h3>
                            <p className="text-lg font-medium text-secondary-700">Desarrollé una automatización completa en n8n para la empresa Eunamed, destinada a generar preguntas de opción múltiple a partir de videos educativos. El proceso toma automáticamente los archivos subidos a una carpeta de Google Drive, extrae el contenido, lo envía a Gemini (modelo LLM) para generar preguntas, y guarda el resultado en Google Sheets con el formato requerido. Esta solución redujo un 70% el tiempo que tomaban los empleados haciendo esta tarea manualmente.</p>
                            <p className="text-lg font-medium text-secondary-700">Tecnologías aplicadas: n8n, Google Drive API, Google Sheets, Gemini, lógica condicional, automatización de procesos, procesamiento de texto con IA.</p>
                            <img src="/Automatizacion-preguntas.png" alt="" style={{borderRadius: "10px"}}/>
                        </div>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="card border-l-4 border-accent-500 hover:border-accent-600">
                            <h3 className="text-xl font-semibold text-accent-600">Automatización de categorización de preguntas con IA (n8n + Gemini)</h3>
                            <p className="text-lg font-medium text-secondary-700">Implementé una automatización en n8n para clasificar preguntas generadas por IA según el perfil de conocimientos del examen Eunacom. A través de Google Sheets y Gemini, el sistema analiza cada pregunta y la asigna a una categoría médica correspondiente. El flujo incluye validaciones, procesamiento condicional y control de calidad, reduciendo la carga de revisión manual sin eliminar la supervisión profesional.</p>
                            <p className="text-lg font-medium text-secondary-700">Tecnologías utilizadas: n8n, Google Sheets, Google Gemini, lógica condicional, categorización con IA, automatización de procesos educativos.</p>
                            <img src="/Conseguir-codigo.png" alt="" style={{borderRadius: "10px"}}/>
                        </div>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="card border-l-4 border-accent-500 hover:border-accent-600">
                            <h3 className="text-xl font-semibold text-accent-600">Automatización del envío de correos por país de origen del título – Eunamed</h3>
                            <p className="text-lg font-medium text-secondary-700">Desarrollé una solución automatizada en n8n para la empresa Eunamed, orientada al envío de correos electrónicos cada vez que se completaba un formulario de reconocimiento de título. El desafío principal era que, según el país de origen del título, los mails debían dirigirse a distintos destinatarios. Implementé una lógica condicional con múltiples ramas utilizando webhooks, filtros y nodos de Gmail, logrando reducir a cero la intervención humana en esta tarea rutinaria. Esta automatización no solo eliminó errores manuales, sino que liberó tiempo valioso para el equipo administrativo.</p>
                            <img src="/Reconocimiento-titulo.png" alt="" style={{borderRadius: "10px"}}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

const styles = {
    sliderContainer: {
        position: 'relative',
        width: '100%',
        height: '400px',
        margin: '20px 0',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '10px',
    },
    arrowButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 10,
    },
    prevButton:{
        borderRadius:'10px',
    },
    nextButton: {
        borderRadius: '10px',
        right: '0px',
    },
};
export default Proyects;