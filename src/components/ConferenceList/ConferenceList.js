import React from 'react'
import './conferenceList.scss'
import image from '../../assets/images/image.png'

function ConferenceList() {
    const data = [
        {
            img_src: image,
            name: "The quick brown fox jumps over the lazy dog.",
            desc: "Сегодня на Ученом совете по присуждению ученой степени доктора философии (PhD) по ",
            id: 1
        },
        {
            img_src: image,
            name: "The quick brown fox jumps over the lazy dog.",
            desc: "Сегодня на Ученом совете по присуждению ученой степени доктора философии (PhD) по ",
            id: 2
        },
        {
            img_src: image,
            name: "The quick brown fox jumps over the lazy dog.",
            desc: "Сегодня на Ученом совете по присуждению ученой степени доктора философии (PhD) по ",
            id: 3
        },
        {
            img_src: image,
            name: "The quick brown fox jumps over the lazy dog.",
            desc: "Сегодня на Ученом совете по присуждению ученой степени доктора философии (PhD) по ",
            id: 4
        },
        {
            img_src: image,
            name: "The quick brown fox jumps over the lazy dog.",
            desc: "Сегодня на Ученом совете по присуждению ученой степени доктора философии (PhD) по ",
            id: 5
        },
        {
            img_src: image,
            name: "The quick brown fox jumps over the lazy dog.",
            desc: "Сегодня на Ученом совете по присуждению ученой степени доктора философии (PhD) по ",
            id: 6
        },
        {
            img_src: image,
            name: "The quick brown fox jumps over the lazy dog.",
            desc: "Сегодня на Ученом совете по присуждению ученой степени доктора философии (PhD) по ",
            id: 7
        },
        {
            img_src: image,
            name: "The quick brown fox jumps over the lazy dog.",
            desc: "Сегодня на Ученом совете по присуждению ученой степени доктора философии (PhD) по ",
            id: 8
        },
        {
            img_src: image,
            name: "The quick brown fox jumps over the lazy dog.",
            desc: "Сегодня на Ученом совете по присуждению ученой степени доктора философии (PhD) по ",
            id: 9
        }
    ]
  return (
    <div className='conference_list'>
        <div className='conference_list_child'>
            <div className='row'>
                {
                    data?.map((item, index) => {
                        return (
                            <div className='card' key={index}>
                                <img src={item.img_src} alt={item.name}/>
                                <h2>{item.name}</h2>
                                <p>{item.desc}</p>
                                <button>Ko'proq ma'lumot</button>
                            </div>
                        )
                    })
                }    
            </div>
        </div>
    </div>
  )
}

export default ConferenceList