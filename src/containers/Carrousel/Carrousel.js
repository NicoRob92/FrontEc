import React, {useState} from "react";
import style from './_Carrousel.module.scss'
export const Carrousel = () => {
    const images = ['1','2','3','4','5','6','7','8','9']
    const [selectIndex, setselectIndex] = useState(0)
    const [selectedImage, setselectedImage] = useState(images[0])

    const selectNewImage = (images, next = true)=>{
        const condition = next ? selectIndex < images.length -1 : selectIndex > 0
        const nextIndex = next ? (condition ? selectIndex + 1 : 0) : condition ? selectIndex - 1 : images.length -1
        setselectedImage(images[nextIndex])
        setselectIndex(nextIndex)
    }

    const previous = ()=>{
        selectNewImage(images,false)
    }
    const next = ()=>{
        selectNewImage(images,true)
    }

    return(
        <div className={style.container}>
            <button onClick={() => previous()}>{'<'}</button>
            <img src={require(`../../Assets/${selectedImage}.jpg`)} alt= "nico"/>
            <button onClick={() => next()}>{'>'}</button>
        </div>
    )

}