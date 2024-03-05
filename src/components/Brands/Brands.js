import React from 'react'
import './brands.scss'
import samsung from '../../assets/images/Vector.png'
import google from '../../assets/images/Google.png'
import sony from '../../assets/images/Sony.png'
import walmart from '../../assets/images/Walmart.png'
import microsoft from '../../assets/images/Microsoft.png'

function Brands() {
  const data = [
    {
      img_src: samsung,
      name: "samsung"
    },
    {
      img_src: walmart,
      name: "walmart"
    },
    {
      img_src: microsoft,
      name: "microsoft"
    },
    {
      img_src: sony,
      name: "sony"
    },
    {
      img_src: google,
      name: "google"
    }
  ]
  return (
    <div className='brands'>
        <div className='brands_child'>
            {
              data?.map((item, index) => {
                return (
                  <div className='brand_item' key={index}>
                    <img src={item.img_src} alt={item.name}/>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Brands