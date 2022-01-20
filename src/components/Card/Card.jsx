import s from "./Card.module.scss"

const defaultImage = "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg"

export default function CardItem ({image, title, details, price}){
    return <article className={s.card}>
        <div>
        <img src={image || defaultImage} className ={s.cardImg} />
        <p className={s.cardText}>
            <h4>{title}</h4> 
            
            <span className ={s.details}>{details}</span>
            <span className ={s.price}> ${price}</span>       
        </p>

        </div>
    </article>
}