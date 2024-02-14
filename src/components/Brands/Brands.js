import React from 'react'
import './brands.scss'
function Brands() {
  const data = [
    {
      img_src: "https://p.kindpng.com/picc/s/37-370780_samsung-logo-white-png-transparent-png.png",
      name: "samsung"
    },
    {
      img_src: "https://www.figma.com/file/2nWojy3y3puRw90DvtJlnU/Maqola?type=design&node-id=73-2278&mode=design&t=SVrBGFrE0uf4eR2t-4",
      name: "walmart"
    },
    {
      img_src: "https://www.figma.com/file/2nWojy3y3puRw90DvtJlnU/Maqola?type=design&node-id=73-2282&mode=design&t=SVrBGFrE0uf4eR2t-4",
      name: "microsoft"
    },
    {
      img_src: "https://www.figma.com/file/2nWojy3y3puRw90DvtJlnU/Maqola?type=design&node-id=73-2288&mode=design&t=SVrBGFrE0uf4eR2t-4",
      name: "sony"
    },
    {
      img_src: "https://www.figma.com/file/2nWojy3y3puRw90DvtJlnU/Maqola?type=design&node-id=73-2293&mode=design&t=SVrBGFrE0uf4eR2t-4",
      name: "google"
    }
  ]
  return (
    <div className='brands'>
        <div className='brands_child'>
            {
              data?.map((item, index) => {
                return (
                  <div className='brand_item'>
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