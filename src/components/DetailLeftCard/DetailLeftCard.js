import styles from "./_DetailLeftCard.module.scss";

const DetailLeftCard = ({ postById }) => {
  return (
    <div className={`card ${styles.card_wrapper}`}>
      <div className={`card ${styles.product_imgs}`}>
        <div className={styles.img_display}>
          <div className={styles.img_showcase}>
            <img src={postById.Images} alt={postById.name} />
          </div>
        </div>
        <div className={styles.img_select}>
          {postById.Images?.map((image) => (
            <div className={styles.img_item}>
              <img src={image} alt={postById?.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailLeftCard;
