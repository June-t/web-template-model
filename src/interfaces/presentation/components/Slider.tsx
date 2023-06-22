import { Fragment, useRef } from 'react'
import Arrow from './Arrow'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SimpleSlider = ({ children }: any) => {
  const sliderRef = useRef(null)

  const next = () => {
    sliderRef.current.slickNext()
  }

  const previous = () => {
    sliderRef.current.slickPrev()
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <Fragment>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <div className="button_slider">
        <button className="button" onClick={previous}>
          <Arrow />
        </button>
        <button className="button" onClick={next}>
          <Arrow />
        </button>
      </div>
    </Fragment>
  )
}

export default SimpleSlider
