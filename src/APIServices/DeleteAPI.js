import axios from 'axios'

// Delete
export default function Delete(UserID){
    let URL = 'http://localhost:5000/api/v1/DeleteInfo/'+UserID;
    return axios.get(URL,{
        headers:{
            'x-access-token':localStorage.getItem('my-token')
        }
    })
    .then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}

