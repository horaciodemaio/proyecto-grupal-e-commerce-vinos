//REACT
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllproducts, addCart, addToFavourite } from "../../actions/index";
import Product from "../product/Product";


function AllProducts({ products, GetProducts, addCart, addToFavourite }) {

   useEffect(() => {
    GetProducts();
  }, [GetProducts]);

 

  return (
    <div>
      <div className="catalogo">
        {products ? (
          products.map((p) => {
            return (
              <div key={p.id}>
                
                  <Product
                  id={p.id}
                    name={p.name}
                    image={p.image}
                    price={p.price}
                    description={p.description}
                    stock={p.stock}
                  />
                
                
              </div>
            );
          })
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.getAllProducts,
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetProducts: () => dispatch(getAllproducts()),
    addCart: (id) => dispatch(addCart(id)),
    addToFavourite: (id) => dispatch(addToFavourite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
