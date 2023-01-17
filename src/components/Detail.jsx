import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [data, setData] = useState(null);
    const { id }= useParams()
    const getUsers = async () => {
        try {
            // // setLoading(false)
            const response = await fetch('https://fakestoreapi.com/products/'+ id);
            // const response = await fetch('https://fakestoreapi.com/products/4');
            setData(await response.json());
            console.log(response);
          } 
          catch (error) {
            // setLoading(false)
            console.log("error message is" + error)
          }
        };
          useEffect(() => {
            getUsers();
          }, []);
  return (
   <div>
    <div className='container my-4'>
        <div className='row align-items-center'>
 { data && (
  <>
            <div className='col-lg-6 col-md-6 col-12 order-1 order-md-2'>
              <img src={data.image} alt="" style={{height : "400px", width : "300px"}} />
            </div>
  <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
    <div class="section-title ml-lg-5">
        <h5 class="text-custom font-weight-normal mb-3">Enjoy Your Shopping</h5>
        <h4 class="title mb-4">{data.title}</h4>
        <p class="text-muted mb-0">{data.description}</p>
        <div class="row">
        <div class="col-lg-6 mt-4 pt-2">
          <div class="media align-items-center rounded shadow p-3">
            <i class="fa fa-user h4 mb-0 text-custom"></i><h6 class="ml-3 mb-0"><p class="text-dark">Price is ${data.price}</p></h6></div></div>
        </div>
        
</div>
</div>
</>
)
}
</div>
</div>
</div>
  )
}

export default Detail
