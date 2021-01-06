
import axios from 'axios'
export const fetchData=async ()=>{
    const url='covid19.mathdro.id/api'
    const response=await axios.get(url)
try{
console.log(response)
}catch(error){

}
}