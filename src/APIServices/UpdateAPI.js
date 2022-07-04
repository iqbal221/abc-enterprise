import axios from 'axios'


// Update
export default function Update(UserID,Name,Head,Type,Amount,Date,SL){
    let URL = 'http://localhost:5000/api/v1/UpdateInfo/'+UserID;
    let PostBody = {
        Name:Name,
        Head:Head,
        Type:Type,
        Amount:Amount,
        Date:Date,
        SL:SL
    }
    return axios.post(URL,PostBody,{
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