import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
const Main = (props) => {
  console.log(props.search);
  const search = props.search;
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const getUsers = async () => {
    try {
        // setLoading(false)
        const response = await fetch(url);
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
      }, [url]);

      useEffect(() => {
        console.log(props.search, "Search")
        if(props.search === ''){
          setFilteredData([]);
        }
        else{
          const filteredData = data.filter((currElm)=>{
              return currElm.title.includes(search);
          })
          setFilteredData(filteredData);
        }
        console.log(filteredData, "FilteredData");
      },[props.search])
  return (
    <>
    <div className="container-fluid mt-5">
    <ul className="nav nav-pills" style={{marginBottom : "2px"}}>
  <li className="nav-item">
    <button className="nav-link " aria-current="page" onClick={()=>{
      setUrl("https://fakestoreapi.com/products")
    }}>All</button>
  </li>
  <li className="nav-item">
    <button className="nav-link" onClick={()=>{
      setUrl("https://fakestoreapi.com/products/category/men's%20clothing")
    }}>Men Clothes</button>
  </li>
  <li className="nav-item">
    <button className="nav-link" onClick={()=>{
    setUrl("https://fakestoreapi.com/products/category/women's%20clothing");
    console.log("click")
  }} >Women Clothes</button>
  </li>
  <li className="nav-item">
    <button className="nav-link"
   onClick={()=>{
    setUrl("https://fakestoreapi.com/products/category/jewelery");
    console.log("click")
  }} >Jewelery</button>
  </li>
</ul>
                  <div className="row text-center justify-content-center">
     {filteredData.length === 0 && data.map((currElm)=>{
      return(
        <div className="card my-3 " style={{width: "18rem"}} key={currElm.id} >
  <img src={currElm. image} className="card-img-top cursor-pointer" alt="..." style={{height: "200px", cursor:'pointer'}}/>
  <div className="card-body">
        <Link to={`/singleProduct/${currElm.id}`}>
    <p className="card-text"> <strong>{currElm.title}</strong> </p>
</Link>
  </div>
</div>
);
})}

{
  filteredData && filteredData.map((currElm)=>{
    return(
      <div className="card my-3 " style={{width: "18rem"}} key={currElm.id} >
<img src={currElm. image} className="card-img-top cursor-pointer" alt="..." style={{height: "200px", cursor:'pointer'}}/>
<div className="card-body">
      <Link to={`/singleProduct/${currElm.id}`}>
  <p className="card-text"> <strong>{currElm.title}</strong> </p>
</Link>
</div>
</div>
);
})
}

    </div>
    </div>
    </>
  )
}

export default Main
