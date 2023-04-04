import React, { useState } from 'react'
import './Slider.css'
import { BtnSlider } from './BtnSlider'
import dataSlider from './DataSlider.json'
import { useTiendaContext } from '../../context/TiendaContext'
import { Link } from 'react-router-dom'

export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)
    const { categorias, setCategory } = useTiendaContext();

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }


    return (
        <div className="container-slider" id="slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <Link to={"/tienda/categorias/" + categorias[(slideIndex - 1)]?.id} onClick={() => { setCategory(categorias[(slideIndex - 1)]?.name)}}>
                            <img alt='' src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
                        </Link>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} className="x" />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} className="x" />

            <div className="container-dots">
                {Array.from({ length: 3 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}