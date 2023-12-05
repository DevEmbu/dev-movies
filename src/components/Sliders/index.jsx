
import { Swiper, SwiperSlide } from 'swiper/react'
import { ContainerSlide } from './styles'

//FUNÇÃO  que vai receber o CARROSSEL DE FILMES TOPS
function Slider({ info, title }){
   // console.log(info,title)
    return(
        <>
          <ContainerSlide>
            <h2>{title}</h2>
             <Swiper 
                    grabCursor
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    className='swiper'
             >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='cor-title'> {item.original_title} </div>
                    </SwiperSlide>

                ))}
                
             </Swiper>
          </ContainerSlide>
        </>
    )
}
export default Slider