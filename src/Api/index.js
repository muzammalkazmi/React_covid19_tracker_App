import axios from 'axios'
const url='https://covid19.mathdro.id/api'
export const fetchData=async()=>{
   try{
       const {data:{confirmed,recovered,deaths,dailySummary}}=await axios.get(url)
       return {data:{confirmed,recovered,deaths,dailySummary}}
   }catch(error){

   }
}