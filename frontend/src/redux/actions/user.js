// import axios from "axios"
// import {server} from "../../server"

// export const loadUser = () => async (dispatch) => {
//     try {
//         dispatch({
//             type: "LoadUserRequest"
//         });

//         const {data} = await axios.get(`${server}/user/getuser`, {withCredentials: true});

//         dispatch({
//             type: "LoadUserSuccess",
//             // sending payload as a data of user to reducer 
//             payload: data.user,
//         });

//     } catch (error) {
//         dispatch({
//             type: "LoadUserFail",
//             payload: error.response.data.message,
//         })
//     }
// }



// export const loadSeller = () => async (dispatch) => {
//     try {
//         dispatch({
//             type: "LoadSellerRequest"
//         });

//         const {data} = await axios.get(`${server}/seller/getseller`, {withCredentials: true});

//         dispatch({
//             type: "LoadSellerSuccess",
//             // sending payload as a data of user to reducer 
//             payload: data.user,
//         });

//     } catch (error) {
//         dispatch({
//             type: "LoadSellerFail",
//             payload: error.response.data.message,
//         })
//     }
// }


import axios from "axios"
import {server} from "../../server"

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadUserRequest"
        });

        const {data} = await axios.get(`${server}/user/getuser`, {withCredentials: true});

        dispatch({
            type: "LoadUserSuccess",
            // sending payload as a data of user to reducer 
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: "LoadUserFail",
            payload: error.response.data.message,
        })
    }
}



export const loadSeller = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadSellerRequest"
        });

        const {data} = await axios.get(`${server}/seller/getseller`, {withCredentials: true});

        dispatch({
            type: "LoadSellerSuccess",
            // sending payload as a data of user to reducer 
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: "LoadSellerFail",
            payload: error.response.data.message,
        })
    }
}