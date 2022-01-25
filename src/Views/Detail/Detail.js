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
  const productById = useSelector((state) => state.reducer.productById);

  useEffect(() => {
    dispatch(actionsCreators.getProductsById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.Container}>
      {productById ? <DetailLeftCard productById={productById} /> : null}
      {productById ? <DetailRightCard productById={productById} /> : null}
      {productById ? <Purchase productById={productById} /> : null}     
    </div>
  );
};

export default CardDetail;
