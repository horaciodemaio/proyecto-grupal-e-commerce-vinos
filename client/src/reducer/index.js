import {
  GET_ALL_PRODUCTS,
  SORT_BY_PRECIO,
  PRODUCT_DETAIL,
  POST_PRODUCT,
  SEARCH_PROCUCT_BY_NAME,
  NEXT_PAGE,
  PREVIUS_PAGE,
  GET_ALL_CATEGORIES,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} from "../actions/index";

const initialState = {
  productCategories: [],
  getAllProducts: [],
  productDetail: [],
  searchProductByName: [],
  createdProduct: [],
  page: 0,
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      return {
        ...state,
        getAllProducts: action.payload,
      };
    }
    case GET_ALL_CATEGORIES: {
      return {
        ...state,
        productCategories: action.payload,
      };
    }
    case SORT_BY_PRECIO: {
      return {
        ...state,
        getAllProducts: action.payload,
      };
    }
    case POST_PRODUCT: {
      return {
        ...state,
        createdProduct: state.createdProduct.concat(action.payload),
      };
    }
    case PRODUCT_DETAIL: {
      return {
        ...state,
        productDetail: action.payload,
      };
    }
    case SEARCH_PROCUCT_BY_NAME: {
      return {
        ...state,
        getAllProducts: action.payload,
      };
    }
    case NEXT_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case PREVIUS_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case ADD_TO_CART: {
      let newItem = state.getAllProducts.find(
        (product) => product.id === action.payload
        );
        console.log(newItem)
      return{
        ...state,
        cart: [...state.cart, newItem],
      }
      
    }
    case REMOVE_ONE_FROM_CART: {
      
    }
    case REMOVE_ALL_FROM_CART: {
      
    }
    case CLEAR_CART: {
      
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
