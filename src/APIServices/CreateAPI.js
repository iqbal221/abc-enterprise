import axios from 'axios'


// Create
export default function Create(Name,Head,Type,Amount,Date,SL){
    let URL = 'http://localhost:5000/api/v1/CreateInfo';
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
        console.log(res)
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


// Read 

// export function Read(){
//     let URL = 'http://localhost:5000/api/v1/ReadInfo'
//     return axios.get(URL)
//     .then((res)=>{
//         if(res.status===200){
//             return res.data['data'];
//         }
//         else{
//             return false;
//         }
//     }).catch((err)=>{
//         console.log(err);
//         return false;
//     })
// }

// // Update
// export default function Update(ProductName,ProductCode,Img,UnitPrice,Quantity,TotalPrice,id){
//     let URL = '/api/v1/UpdateProduct/'+id;
//     let PostBody = {
//         ProductName:ProductName,
//         ProductCode:ProductCode,
//         Img:Img,
//         UnitPrice:UnitPrice,
//         Quantity:Quantity,
//         TotalPrice:TotalPrice
//     }
//     return axios.post(URL,PostBody)
//     .then((res)=>{
//         if(res.status===200){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }).catch((err)=>{
//         console.log(err);
//         return false;
//     })
// }

// // Delete
// export function Delete(id){
//     let URL = '/api/v1/DeleteProduct/'+id;
//     return axios.get(URL)
//     .then((res)=>{
//         if(res.status===200){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }).catch((err)=>{
//         console.log(err);
//         return false;
//     })
// }






  