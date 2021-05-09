import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Pic1 from '../images/pic1.jpeg'
import Pic5 from '../images/pic5.png'
import Pic2 from '../images/pic2.jpeg'
import Pic6 from '../images/pic6.jpeg'

const CarouselTranslators = () => {
    return (
        <div>
    <Carousel pause='hover'>


  <Carousel.Item interval={1000}>
  <a href ="https://shinigamirex-tts.herokuapp.com/">
    <img
      className="d-block w-10"
      src={Pic2}
      alt="text to speech"
    />

    <Carousel.Caption>
      <h4 style={{color:"white"}}>Text to Speech</h4>
    </Carousel.Caption>
    </a>
  </Carousel.Item>



  <Carousel.Item interval={1000}>
   <a href ="https://shinigamirex-stt.herokuapp.com/">
    <img
      className="d-block w-10"
      src={Pic6}
      alt="speech to text"
    />
    <Carousel.Caption>
      <h4>Speech to Text</h4>
     
    </Carousel.Caption>
    </a>
  </Carousel.Item>
  <Carousel.Item>
   <a href = "https://translator-bot-apps.herokuapp.com/">
   <img
      className="d-block w-10"
      src={Pic5}
      alt="bot"
    />
    <Carousel.Caption>
      <h3>Chat Bot</h3>
    
    </Carousel.Caption>
    </a>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CarouselTranslators
