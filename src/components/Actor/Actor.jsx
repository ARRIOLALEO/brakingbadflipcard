import React,{useState} from 'react'

import Styles from './Actor.module.scss'

export default function Actor({data}) {
    const {img, name, birthday, occupation, status, nickname} = data
    const [showInformation,setShowInformation] = useState(false)
  return (
    <div className={Styles.container} onMouseOver={()=>setShowInformation(true)} onMouseOut={()=>setShowInformation(false)}>
        <div className={showInformation?Styles.show:Styles.notShow}>
          <p> {name}</p>
          <p>{birthday}</p>
          <p>{occupation}</p>
          <p>{status}</p>
          <p>{nickname}</p>
        </div>
        <div className={showInformation?Styles.notShow:Styles.show}>
            <img src={img} alt={name}/>
        </div>
    </div>
  )
}
