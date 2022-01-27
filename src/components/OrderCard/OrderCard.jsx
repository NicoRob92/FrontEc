import styles from './_OrderCard.module.scss'

const OrderCard = () => {
    return (
        <div className={`card w-75 ${styles.cards}`} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img  src="https://m.media-amazon.com/images/I/71ee+5V4ZRL._AC_SL1500_.jpg" className=" img-thumbnail rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrderCard;
