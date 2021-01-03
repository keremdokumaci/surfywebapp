import axios from '../../../utils/axios/index';

export const GetChatroomById = async (id) => {
    var response = await axios.get(`/chatroom/${id}`);
    if(!!response)
        return [response,null]
    else
        return [null,"Error"]
}

export const GetChatroomsUsers = async (id) => {
    var response = await axios.get(`/chatroom/${id}/users`);
    if(!!response)
        return [response,null]
    else
        return [null,"Error"]
}