import OrderCard from "../../components/OrderCard/OrderCard";
import styles from './_Order.module.scss'

const Order = () => {
  const numbers = [1,2,3,4,5]
  return (
    <div className={styles.container}>
      <h1>Your Orders</h1>
      <div className="card text-center w-75">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Buy Again
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Open Orders</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Cancelled Orders</a>
            </li>
          </ul>
        </div>

        <div className={`card-body ${styles.card_body}`}>
          {numbers 
          ? numbers.map(e => <OrderCard/>)
          : <h5 className="card-title">You have not placed any orders</h5>
        }
        </div>
      </div>
    </div> 
  )
}

export default Order;
