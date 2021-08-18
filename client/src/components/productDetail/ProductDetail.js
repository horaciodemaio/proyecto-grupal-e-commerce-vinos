import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  clearProductDetail,
  addCart,
  addProductToDBCart
} from "../../actions/index";
import NavBar from "../NavBar/NavBar";
import cart2 from "../../assets/images/cart2.png";
import Review from "../Review/Review";

import PostReview from "components/PostReview/PostReview";

import { useAuth0 } from "@auth0/auth0-react";


export default function ProductDetail() {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { id } = useParams();
  const {isAuthenticated,user}=useAuth0()
  useEffect(() => {
    dispatch(getProductDetail(id));
    return () => {
      dispatch(clearProductDetail());
    };
  }, [dispatch, id]);

  const addToCart = (id) => {
    if(isAuthenticated) dispatch(addProductToDBCart(id,user.sub))
    else dispatch(addCart(id));
  };

  return (
    <div>
      <NavBar />

      {productDetail ? (
        <div className="product__detail">
          <img src={productDetail.image} alt="Loading..." width="40%" />

          <div className="product__data">
            <div className="name__price">
              <h1>{productDetail.name}</h1>
              <h1>$ {productDetail.price}</h1>
            </div>
            <p className="data__description"> {productDetail.description} </p>
            <p>Stock: {productDetail.stock} unidades</p>
          </div>



          <button onClick={() => addToCart(productDetail.id)}>
              cart
            </button>

        </div>
      ) : (
        <p>Cargando...</p>
      )}
      { productDetail.reviews ? 
        productDetail.reviews.map(ele => {
          return (
            <Review review={{ ...ele }} />
          )
        }) : (
          <p>Sin Comentarios </p>
        )
      }



      <PostReview productId={productDetail.id} />
    </div>
  );
}


