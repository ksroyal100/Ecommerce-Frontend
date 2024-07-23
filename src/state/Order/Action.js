import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"
import { api, API_BASE_URL } from '../../config/apiConfig'
import dispatch from 'react-redux'

export const createOrder = (reqData) => async (dispatch) => {
  
    try {
      dispatch({ type: CREATE_ORDER_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${reqData.jwt}`,
        },
      };
  
      const { data } = await api.post(
        `${API_BASE_URL}/api/orders/`,
        reqData.address, 
      );
      console.log(reqData.address)
       
      if (data._id) {
        reqData.navigate({ search: `step=3&order_id=${data._id}` });
      }
      console.log("created order - ", data);
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log("catch error : ", error);
      dispatch({
        type: CREATE_ORDER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const getOrderById = (orderId) => async (dispatch) => {
  // console.log("get order req", orderId)
    dispatch({ type: GET_ORDER_BY_ID_REQUEST })
    try {
        const { data } = await api.get(
            `/api/orders/${orderId}`,
        )
      console.log("order by id", data)
      console.log("order by id", orderId)
      
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
            
        })
    } catch (error) {
        console.log("catch", error)
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload:error.message
        })
    }
}