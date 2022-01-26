import s from "./CartItem.module.scss"

export default function CartItem({product,amount,}){
    return (
        <div className={s.item}>
                <input type={"button"} value={"X"}></input>
            <h5>{product}</h5>
            <div>
                <button>+</button>
                <span>{amount}</span>
                <button>-</button>
            </div>
        </div>
    )
}