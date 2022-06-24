import React,{useState, useEffect} from 'react'
import Actor from '../Actor/Actor'

import Styles from "./Actors.module.scss"

export default function Actors() {
    const [actors,setActors] = useState([])
    useEffect(()=>{
        (async()=>{
            const req = await fetch("https://breakingbadapi.com/api/characters")
            const res = await req.json();
            setActors(res);
        })()
    },[])
  return (
    <div className={Styles.container}>
        {
            actors.map((actor)=>{
                return(
                    <Actor data={actor} key={Actor.name}/>
                )
            })
            
        }
    </div>
  )
}
