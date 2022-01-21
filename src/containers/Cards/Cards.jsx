import Card from "../../components/Card/Card.jsx"
import faker from "faker"
import s from "./Cards.module.scss"
//valores de ejemplo
const arr = [
    {
        image:faker.random.image(),
        title:faker.random.words(), 
        details:faker.random.words(), 
        price: faker.commerce.price(),
        id:0
    },
    {
        image:faker.random.image(),
        title:faker.random.words(), 
        details:faker.random.words(), 
        price: faker.commerce.price(),
        id:1
    },
    {
        image:faker.random.image(),
        title:faker.random.words(), 
        details:faker.random.words(), 
        price: faker.commerce.price(),
        id:2
    }
]

export default function Cards () {
    return(
        <div className={s.cards}>
            {arr.map(item=><Card 
            image={item.image}
            title ={item.title}
            details ={item.details}
            price ={item.price}
            id ={item.id}
            key ={item.id}
            />)}
        </div>
    )
}