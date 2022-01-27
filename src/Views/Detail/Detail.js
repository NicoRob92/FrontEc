import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import DetailLeftCard from "../../components/DetailLeftCard/DetailLeftCard";
import DetailRightCard from "../../components/DetailRightCard/DetailRightCard";
import Purchase from "../../components/Purchase/Purchase";

import * as actionsCreators from "../../ducks/actions/actionCreators";

import styles from "./_Detail.module.scss";

const CardDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postById = useSelector((state) => state.reducer.postById);
  const cart = useSelector((state) => state.reducer.cart);

  useEffect(() => {
    dispatch(actionsCreators.getPostById(id));
  }, [dispatch, id]);

  const addPostToCart = (e) => {
    let quantity = Number(document.getElementById("quantity").value);

    const post = {
      id: postById.id,
      name: postById.name,
      price: postById.price,
      stock: postById.stock,
      status: postById.status,
      quantity,
    };
    localStorage.setItem(postById.id, JSON.stringify(post));
  };
  

  return (
    <div className={styles.Container}>
      {postById ? <DetailLeftCard postById={postById} /> : null}
      {postById ? <DetailRightCard postById={postById} /> : null}
      {postById ? <Purchase postById={postById} addPostToCart={addPostToCart} /> : null}
    </div>
  );
};

export default CardDetail;
