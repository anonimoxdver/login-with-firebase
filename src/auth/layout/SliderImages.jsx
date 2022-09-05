import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

export const SliderImages = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
      };

  return (
    <div className='slider-main'>
        <Slider {...settings}>
            <div>
                <img 
                    className='img-slider'  
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1656943011/chat-twilio/New_Message_Flatline_ilrf51.svg"
                    alt="sliderImage"
                />
                <h1 className='h1-slider'>Recibe mensajes completamente secretos. </h1>
                <h3 className='h3-slider'>Tus mensajes serán completamente secretos. </h3>
            </div>
            <div>
                <img
                    className='img-slider'  
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1656887003/chat-twilio/Conversation__Flatline_m8mtse.svg"
                    alt="sliderImage"
                />
                <h1 className='h1-slider'>Crea conversaciones con tus amigos. </h1>
                <h3 className='h3-slider'>Agrega amigos a tus conversaciones. </h3>
            </div>
            <div>
                <img 
                    className='img-slider'
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1656943105/chat-twilio/Calling_Flatline_4_drnqk6.svg" 
                    alt="sliderImage"
                />
                <h1 className='h1-slider'>Crea llamadas entre tu y otra persona. </h1>
                <h3 className='h3-slider'>Puedes llamar a tus amigos desde cualquier parte del mundo. </h3>
            </div>
        </Slider>
    </div>
  )
}
