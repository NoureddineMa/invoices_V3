import API from "../BaseUrl";

export async function Login(user){
    const res = await API.post('/auth/token',user)
    return res.data
}