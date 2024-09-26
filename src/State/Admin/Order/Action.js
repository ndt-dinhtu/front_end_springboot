import { api } from "../../../config/apiConfig";
import { DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "./ActionType";

export const getOrders = () => {
    console.log("get all orders");
    return async (dispatch) => {

        dispatch({ type: GET_ORDERS_REQUEST });

        try {
            const response = await api.get(`/api/admin/orders/`);
            console.log("get all orders ", response.data);
            dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });

        } catch (error) {
            console.log("catch error", error);
            dispatch({
                type: GET_ORDERS_FAILURE, payload: error.message
            });
        }
    };  
};

export const deleteOrder = (orderId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_ORDER_REQUEST });
        try {
            const { data } = await api.delete(`/api/admin/orders/${orderId}/delete`);
            console.log("delete order ", data)
            dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
        } catch (error) {
            console.log("catch error ", error)
            dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
        }
    }
}