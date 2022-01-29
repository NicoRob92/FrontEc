import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import DetailLeftCard from "../../components/DetailLeftCard/DetailLeftCard";
import DetailRightCard from "../../components/DetailRightCard/DetailRightCard";
import Purchase from "../../components/Purchase/Purchase";

import * as actionCreators from "../../ducks/actions/actionCreators";

import styles from "./_Detail.module.scss";

const CardDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postById = useSelector((state) => state.reducer.postById);

  useEffect(() => {
    dispatch(actionCreators.getPostById(id));
  }, [dispatch, id]);

  const addPostToCart = () => {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let quantity = Number(document.getElementById("quantity").value);

    const post = {
      id: postById.id,
      name: postById.name,
      price: postById.price,
      stock: postById.stock,
      status: postById.status,
      quantity,
    };

    if (posts.length === 0) {
      posts.push(post);
      localStorage.setItem("posts", JSON.stringify(posts));

    }

    let check = false;
    if (posts.length !== 0) {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === post.id) {
          posts[i] = post;
          check = true;
          break;
        }
      }
    }
    if (check) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }

    if (!check) {
      posts.push(post);
      localStorage.setItem("posts", JSON.stringify(posts));
    }
    
    dispatch(actionCreators.setCart(JSON.parse(localStorage.getItem('posts'))))
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
