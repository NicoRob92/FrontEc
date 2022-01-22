import styles from './_CardDetail.module.scss'

const CardDetail = () => {
    return (
        <div className={styles.Container}>
            <div className={`card ${styles.card_wrapper}`}>
                {/* card left */}
                <div className={`card ${styles.product_imgs}`}>
                    <div className={styles.img_display}>
                        <div className={styles.img_showcase}>
                            <img src="https://m.media-amazon.com/images/I/71ee+5V4ZRL._AC_SL1500_.jpg" alt="" />
                        </div>
                    </div>

                    <div className={styles.img_select}>
                        <div className={styles.img_item}>
                            <a href="#" data-id="1">
                                <img src="https://media.wired.com/photos/616e0c76a53804056cba5f93/master/w_2400,h_1800,c_limit/Gear-Google-Pixel-6-yellow.jpg" alt="" />
                            </a>
                        </div>
                        <div className={styles.img_item}>
                            <a href="#" data-id="2">
                                <img src="https://media.wired.com/photos/616e0c76a53804056cba5f93/master/w_2400,h_1800,c_limit/Gear-Google-Pixel-6-yellow.jpg" alt="" />
                            </a>
                        </div>
                        <div className={styles.img_item}>
                            <a href="#" data-id="3">
                                <img src="https://media.wired.com/photos/616e0c76a53804056cba5f93/master/w_2400,h_1800,c_limit/Gear-Google-Pixel-6-yellow.jpg" alt="" />
                            </a>
                        </div>
                        <div className={styles.img_item}>
                            <a href="#" data-id="4">
                                <img src="https://media.wired.com/photos/616e0c76a53804056cba5f93/master/w_2400,h_1800,c_limit/Gear-Google-Pixel-6-yellow.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* card right */}
            <div className={`card ${styles.product_content}`}>
                <h2 className={styles.product_title}>Google Pixel 6 Pro</h2>
                <div className={styles.product_rating}>
                    <i className={`fas fas-star`}></i>
                    <span>4.8(3K)</span>
                </div>
                <div className={styles.product_price}>
                    <p className={styles.last_price}>Old price: <span>$1099</span></p>
                    <p className={styles.new_price}>New price: <span>$879.20 (20%)</span></p>
                </div>
                <div className={styles.product_detail}>
                    <h3>Details</h3>
                    <ul>
                        <li>Detail</li>
                        <li>Detail</li>
                        <li>Detail</li>
                        <li>Detail</li>
                        <li>Detail</li>
                    </ul>
                </div>
            </div>
            {/* purchase info, might be a component */}
            <div className={`card ${styles.purchase_info}`}>
                <div className='card-body' styles="width: 18">
                    <div className={styles.purchase_content}>
                        <p><span>Available</span></p>
                    </div>

                    <div className={styles.purchase_button}>
                        <div className={styles.purchase_quantity}>
                            <p>1</p>
                            <button>+</button>
                            <button>-</button>
                            <p><span>(6)</span> available</p>
                        </div>

                        <button>Add to Cart</button>
                        <button>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}