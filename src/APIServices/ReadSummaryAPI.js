import axios from 'axios'

export default function Read(){
    let URL = 'http://localhost:5000/api/v1/ReadBySummary'
    return axios.get(URL,{
        headers:{
            'x-access-token':localStorage.getItem('my-token')
        }
    })
    .then((res)=>{
        if(res.status===200){
            return res.data["data"];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}