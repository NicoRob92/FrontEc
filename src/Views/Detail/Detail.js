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

  useEffect(() => {
    dispatch(actionsCreators.getPostById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.Container}>
      {postById ? <DetailLeftCard productById={postById} /> : null}
      {postById ? <DetailRightCard postById={postById} /> : null}
      {postById ? <Purchase postById={postById} /> : null}     
    </div>
  );
};

export default CardDetail;
