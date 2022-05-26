import { DeleteApiDetails, GetApiDetails, PostApiDetails, UpdateApiDetails } from '../../api/axiosRequest';
import { GET_DETAILS, POST_DETAILS, UPDATE_DETAILS , DELETE_DETAILS } from '../type';


const GetApiAction = () => {

    return function (dispatch) {
        return GetApiDetails().then((res) => {
            console.log("Response Data is _____", res.data);

            dispatch({
                type: GET_DETAILS,
                payload: res.data,
            });
        });
    }

}
const PostApiAction = (request) => {

    return function (dispatch) {

        dispatch({
            type: POST_DETAILS,
            payload: false,
        });
        return PostApiDetails(request).then((res) => {
            console.log("Post Response Data is _____", res.data);

            dispatch({
                type: POST_DETAILS,
                payload: true,
            });
        });
    }

}

const UpdateApiAction = (request, id) => {

    return function (dispatch) {

        dispatch({
            type: UPDATE_DETAILS,
            payload: false,
        });
        return UpdateApiDetails(request, id).then((res) => {
            console.log("Post Response Data is _____", res.data);

            dispatch({
                type: UPDATE_DETAILS,
                payload: true,
            });
        });
    }

}

const DeleteApiAction = (id) => {

    return function (dispatch) {

        dispatch({
            type: DELETE_DETAILS,
            payload: false,
        });
        return DeleteApiDetails(id).then((res) => {
            console.log("Post Response Data is _____", res.data);

            dispatch({
                type: DELETE_DETAILS,
                payload: true,
            });
        });
    }

}

export { GetApiAction, PostApiAction, UpdateApiAction, DeleteApiAction };