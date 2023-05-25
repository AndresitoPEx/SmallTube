import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import VideoHome from '../VideoHome';
import './section.css'


export default function Section(props) {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    //destructuramos
    const { nombre, colorPrimario, descripcion } = props.datos;
    const { videos, eliminarVideo } = props;
    const colorFondo = {
        backgroundColor: colorPrimario
    }
    return <div className='container'>
        {
            videos.length > 0 ?
                <section className='section-section'>
                    <button className='boton-seccion' style={colorFondo}>
                        {nombre}
                    </button>
                    <p className='texto-seccion'>
                        {descripcion}
                    </p>
                </section> : null
        }
        <div className='row'>
            {
                <Slider {...settings}>

                    {videos.map((video, index) => (
                        <div className='col-mb-4 videitos'>
                            <VideoHome
                                datos={video}
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarVideo={eliminarVideo}

                            />
                        </div>))}

                </Slider>
            }
        </div>
    </div>

}

