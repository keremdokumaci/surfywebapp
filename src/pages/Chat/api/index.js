import axios from '../../../utils/axios/index';

export const GetChatroomById = async (id) => {
    debugger;
    var response = await axios.get(`/chatroom/${id}`);
    if(!!response)
        return [response,null]
    else
        return [null,"Error"]
}