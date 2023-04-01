import Gradlisting from "../../components/grads"
import axios from "axios"


const getGradsData = () => {
  axios.get('grads.json')
  .then((res)=>{
    console.log(res.data);
  }).catch((err)=>{
    console.log(err);
  })
}

function grads() {
  getGradsData();
  return (
    <Gradlisting></Gradlisting>
  )
}

export default grads