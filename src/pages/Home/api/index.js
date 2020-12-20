import axios from '../../../utils/axios/index';

export const CreateChatRoom = async (obj) => {
    try 
    {
        var response = await axios.post('/chatroom',obj)
        return [response?.data,null];
    } 
    catch (err) 
    {
        console.log('error', err);
        return [null,err];
    }
};

export const GetChatRooms = async () => {
    try
    {
        var response = await axios.get('/chatroom')
        return [response?.data,null];
    }
    catch (err) 
    {
        console.log('error', err);
        return [null,err];
    }
}
