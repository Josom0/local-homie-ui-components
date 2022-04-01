import React, { useCallback, useState } from "react";
import { AssetButton, Carousel, CarouselItem } from "@heyhomie/homie-ui-external";

const CarouselTest = () => {
  const [index, setIndex] = useState(0)

  const handleActiveIndexChange = useCallback((index) => {
    setIndex(index)
  }, [])

  const handleButtonClick = () => {
    setIndex(index - 1)

    if (index <= 0) {
      setIndex(0)
    }
  }

  return (
    <div>
      <h1 style={{textAlign: "center", marginTop: "5%"}}>Carousel Item Test</h1>
      <div>
        <AssetButton altImage="GoBack" srcImage="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png" onClick={handleButtonClick} style={{ width: "50px"}} />

        <Carousel index={index} onActiveIndexChange={handleActiveIndexChange} showDotsInLastITem={false} callbackBack={() => {}} callbackNext={() => {}} callbackSkip={() => {}}>
          <CarouselItem
            description='Llena el pre-check y sube tus documentos'
            srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqstVoeVSIp6ZR6xY6C8eFMBK6TAy-pyg_g&usqp=CAU"
            title='Cuéntanos más sobre ti.'
            stepNumber='Checkout'
          />
          <CarouselItem
            description='Realiza tu pago de apartado y escoge la fecha en la que te quieres mudar. '
            srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqstVoeVSIp6ZR6xY6C8eFMBK6TAy-pyg_g&usqp=CAU"
            title='Elige una fecha para iniciar'
            stepNumber='Checkout'
          />
          <CarouselItem
            description='Conoce todos los detalles, haz tu primer pago de renta y empieza a empacar tus tuppers.'
            srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqstVoeVSIp6ZR6xY6C8eFMBK6TAy-pyg_g&usqp=CAU"
            title='Firma tu contrato'
            stepNumber='Checkout'
          />
          <CarouselItem
            description='Conoce todos los detalles, haz tu primer pago de renta y empieza a empacar tus tuppers.'
            srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqstVoeVSIp6ZR6xY6C8eFMBK6TAy-pyg_g&usqp=CAU"
            title='Firma tu contrato'
            stepNumber='Checkout'
          />
        </Carousel>

      </div>
    </div>
  )
}

export default CarouselTest