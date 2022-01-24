import styles from "./_CardDetail.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import faker from "faker";
const CardDetail = () => {
  const [products, setProducts] = useState();
  const { id } = useParams();

  const getProducts = async () => {
    const product = await axios.get(`http://localhost:4000/api/products/${id}`);
    setProducts(product.data);
  };
  console.log(products);

  useEffect(() => {
    getProducts();
  }, [id]);
  return (
    <div className={styles.Container}>
      <div className={`card ${styles.card_wrapper}`}>
        {/* card left */}
        <div className={`card ${styles.product_imgs}`}>
          <div className={styles.img_display}>
            <div className={styles.img_showcase}>
              <img src={faker.image.image(350, 350, true)} alt="" />
            </div>
          </div>

          <div className={styles.img_select}>
            <div className={styles.img_item}>
              <a href="#" data-id="1">
                <img src={faker.image.image(350, 350, true)} alt="" />
              </a>
            </div>
            <div className={styles.img_item}>
              <a href="#" data-id="2">
                <img src={faker.image.image(350, 350, true)} alt="" />
              </a>
            </div>
            <div className={styles.img_item}>
              <a href="#" data-id="3">
                <img src={faker.image.image(350, 350, true)} alt="" />
              </a>
            </div>
            <div className={styles.img_item}>
              <a href="#" data-id="4">
                <img src={faker.image.image(350, 350, true)} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* card right */}
      <div className={`card ${styles.product_content}`}>
        <h2 className={styles.product_title}>{products?.name}</h2>
        <div className={styles.product_rating}>
          <i className={`fas fas-star`}></i>
          <span>4.8(3K)</span>
        </div>
        <div className={styles.product_price}>
          <p className={styles.last_price}>
            Old price: <span>{products?.price}</span>
          </p>
          <p className={styles.new_price}>
            New price:{" "}
            <span>{products?.price - products?.price * 0.2} (20%)</span>
          </p>
        </div>
        <div className={styles.product_detail}>
          <h3>Details</h3>
          <ul>
            <li>{products?.description}</li>
            <li>Detail</li>
            <li>Detail</li>
            <li>Detail</li>
            <li>Detail</li>
          </ul>
        </div>
      </div>
      {/* purchase info, might be a component */}
      <div className={`card ${styles.purchase_info}`}>
        <div className="card-body" styles="width: 18">
          <div className={styles.purchase_content}>
            <p>
              <span>Available</span>
            </p>
          </div>

          <div className={styles.purchase_button}>
            <div className={styles.purchase_quantity}>
              <p>1</p>
              <button>+</button>
              <button>-</button>
              <p>
                <span>(6)</span> available
              </p>
            </div>

            <button>Add to Cart</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
