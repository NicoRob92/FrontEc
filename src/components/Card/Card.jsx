import s from "./Card.module.scss"
import { NavLink } from "react-router-dom"

const defaultImage = "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg"


export default function CardItem ({image, title, details, price, id}){
    
    return (
     <NavLink to={"/"+id /*Cambiar ruta de ser necesario*/} className={s.link}>
    
    <article className={s.card}>
<<<<<<< HEAD
        <img src={image || defaultImage} className ={s.cardImg} />
=======
        
        <img src={image || defaultImage} alt="" className ={s.cardImg} />
>>>>>>> 6b476192989944f484dc567439881fec7856a065
        <div className={s.cardText}>
            {title.length < 17 ? <h5>{title}</h5>: <h5>{title.substring(0,17)}...</h5> }            
            <span className ={s.price}> ${price}</span>       

        </div>     
        

    </article>
    </NavLink>
    )}