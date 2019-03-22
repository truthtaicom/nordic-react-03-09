import React, { useContext, useCallback } from "react";
import { HomeContext } from '../../pages/Home'

export default function ProductItem(props) {
  const { state, addToCart } = useContext(HomeContext)
  const selectItem = useCallback(() => {
    addToCart(props)
  })
  console.log(props)
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="product-wrapper mb-50">
        <div className="product-img mb-25">
          <a href="#">
            <img src={props.img_url} alt="" />
          </a>
          <div className="product-action text-center">
            <a title="Shoppingb Cart" onClick={selectItem}>
              <i className="fas fa-shopping-cart" />
            </a>
            <a href="#" title="Quick View">
              <i className="fas fa-search" />
            </a>
          </div>
        </div>
        <div className="product-content pr-0">
          <div className="pro-cat mb-10">
            <a href="#">furniture</a>
          </div>
          <h4>
            <a href="#">{props.name}</a>
          </h4>
          <div className="product-meta">
            <div className="pro-price">
              <span>$119.00 USD</span>
              <span className="old-price">$230.00 USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
