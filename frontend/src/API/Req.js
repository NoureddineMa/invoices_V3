import API from './BaseUrl'

export async function getUsers(){
    const res = await API.get('/user/user/user')
    return res.data
}

export async function postUser(userdata){
    const res = await API.post('/user/user',userdata)
    return res.data
}
export async function deleteUser(id){
    const res = await API.delete(`/user/user/${id}`)
    return res.data
}
export async function getAllCompanies(){
    const res = await API.get('/company/company')
    return res.data
}
export async function deleteCompany(id){
    const res = await API.delete(`/company/company/${id}`)
    return res.data
}
export async function getDocs(){
    const res = await API.get('/document/document')
    return res.data
}
export async function deleteDocs(id){
    const res = await API.delete(`/document/document/${id}`)
    return res.data
}
export async function ArchivDoc(id){
    const res = await API.put(`/document/document/archived/true/${id}`)
    return res.data
}
export async function DesarchiveDoc(id){
    const res = await API.put(`/document/document/archived/false/${id}`)
    return res.data
}