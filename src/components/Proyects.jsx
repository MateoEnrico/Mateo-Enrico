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
                            <h3 className="text-xl font-semibold text-accent-600">BlacJack Clothes</h3>
                            <p className="text-lg font-medium text-secondary-700">E-commerce con diseño responsive realizada con WordPress, ya publicada y funcional. Usa la API de Mercado Pago y la de correo argentino para calcular costos de envío a cada sucursal y generar la etiqueta necesaria.</p>
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
                            <h3 className="text-xl font-semibold text-accent-600">Automatización de generación de preguntas</h3>
                            <p className="text-lg font-medium text-secondary-700">En la empresa Eunamed, teníamos como objetivo automatizar la generación de preguntas para exámenes múltiple choise en nuestra página. Lo que hacíamos era descargar cada video que tenia la explicación de una pregunta de un examen que habían tomado, y enviarsela a gemini para que este generara 5 preguntas en formato csv y luego ir anexandolo a un excel (todo a mano). Con n8n logré automatizar este proceso de manera que solo debas descargar todos los videos a partir de los cuales quieras generar una pregunta, subirlos a una carpeta de drive y automaticamente se van a agregar con su formato correspondiente todas las preguntas a un google sheet, de forma que logré ahorrar hasta un 70% del tiempo en esta tarea a los empleados.</p>
                            <img src="/Automatizacion-preguntas.png" alt="" style={{borderRadius: "10px"}}/>
                        </div>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="card border-l-4 border-accent-500 hover:border-accent-600">
                            <h3 className="text-xl font-semibold text-accent-600">Automatización de reconocimiento de categorización</h3>
                            <p className="text-lg font-medium text-secondary-700">Cada una de las preguntas generadas anteriormente con IA, tienen una categorización específica segun el perfil de conocimientos Eunacom. En base a ese perfil de conocimientos, este sistema se encarga de categorizar cada pregunta. Obviamente todo esto tiene que ser corregido por un médico al ser terminado ya que la IA se puede confundir pero es un gran paso.</p>
                            <img src="/Conseguir-codigo.png" alt="" style={{borderRadius: "10px"}}/>
                        </div>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="card border-l-4 border-accent-500 hover:border-accent-600">
                            <h3 className="text-xl font-semibold text-accent-600">Automatización de envío de mails</h3>
                            <p className="text-lg font-medium text-secondary-700">En la empresa Eunamed, teníamos como objetivo automatizar el envío de un mail cada vez que se llenaba el formulario de reconocimiento de título. Esto era un poco complicado ya que dependiendo de que país fuera cada título, el mail debía ir a otro destinatario. Con n8n logré automatizar el envío de ese mail, asique hice que un empleado pueda ocuparse de otra cosa más importante para la empresa y no perder el tiempo con esta tarea repetitiva.</p>
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