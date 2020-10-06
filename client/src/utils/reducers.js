import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_LIST,
    ADD_MULTIPLE_TO_LIST,
    REMOVE_FROM_LIST,
    UPDATE_LIST_QUANTITY,
    CLEAR_LIST,
    TOGGLE_LIST
} from './actions';

// import { useReducer } from 'react';

const initialState = {
    products: [],
    categories: [],
    currentCategory: '',
    list: [],
    listOpen: false
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            };
        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        case ADD_TO_LIST:
            return {
                ...state,
                listOpen: true,
                list: [...state.list, action.product]
            };

        case ADD_MULTIPLE_TO_LIST:
            return {
                ...state,
                list: [...state.list, ...action.products],
            };

        case REMOVE_FROM_LIST:
            let newState = state.list.filter(product => {
                return product._id !== action._id;
            });

            return {
                ...state,
                listOpen: newState.length > 0,
                list: newState
            };

        case UPDATE_LIST_QUANTITY:
            return {
                ...state,
                listOpen: true,
                list: state.list.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            };

        case CLEAR_LIST:
            return {
                ...state,
                listOpen: false,
                list: []
            };

        case TOGGLE_LIST:
            return {
                ...state,
                listOpen: !state.listOpen
            };

        default:
            return state;
    }
};

export default reducers;