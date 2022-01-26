import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import DetailLeftCard from "../../components/DetailLeftCard/DetailLeftCard";
import DetailRightCard from "../../components/DetailRightCard/DetailRightCard";
import Purchase from "../../components/Purchase/Purchase";

import styles from "./_Detail.module.scss";
import * as actionsCreators from "../../ducks/actions/actionCreators";

const CardDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postById = useSelector((state) => state.reducer.postById);
  const cart = useSelector((state) => state.reducer.cart);

  let quantity = document.getElementById("quantity");
  const addToCard = (e) => {
    const postToCart = {
      id: postById.id,
      name: postById.name,
      price: postById.price,
      stock: postById.stock,
      toBuy: Number(quantity.value)
    }
    localStorage.setItem(postById.name, JSON.stringify(postToCart));
    dispatch(actionsCreators.addPostToCart(postById));
  };

  useEffect(() => {
    dispatch(actionsCreators.getPostById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.Container}>
      {postById ? <DetailLeftCard postById={postById} /> : null}
      {postById ? <DetailRightCard postById={postById} /> : null}
      {postById ? <Purchase postById={postById} addToCard={addToCard} quantity={quantity}/> : null}
    </div>
  );
};

export default CardDetail;
