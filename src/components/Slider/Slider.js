import React, { useState } from 'react'
import './Slider.css'
import { BtnSlider } from './BtnSlider'
import dataSlider from './DataSlider.json'
import { useTiendaContext } from '../../context/TiendaContext'
import { Link } from 'react-router-dom'

export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)
    const { categorias, setCategory, category, filtrar } = useTiendaContext();
    console.log(category)

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
        <div className="containerSlider" id="slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "Slide active-anim" : "Slide"}
                    >
                        <Link to={"tienda"} onClick={() => { setCategory(categorias[(slideIndex - 1)]?.name); filtrar(categorias[(slideIndex - 1)])}}>
                            <img alt='' src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
                        </Link>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} className="x" />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} className="x" />

            <div className="Container-dots">
                {Array.from({ length: 3 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "Dot active" : "Dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}