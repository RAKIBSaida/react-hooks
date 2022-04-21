import React,{useContext, useState} from 'react'
import { UserContext } from '../context/UserContext';

const AddProduct=({addNewProduct})=>{
    const[product, setProduct]=useState({name:'',price:0});

    const handleForm=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
    const {loggedIn,setLoggedIn}= useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(product.name===""||product.price===0) return;
        let newProduct={
            id:Math.random()*10,
            ...product
                }
        addNewProduct(newProduct);
    }
  return (
      
    <div>
          {/* <UserContext.Consumer> 
           {
               loggedIn=>console.log("AddProduct",loggedIn)
           }
        </UserContext.Consumer>  */}
        <h1>
            loggedIn:{loggedIn ?"  You are logged":"   You are not logged"}
        </h1>
        <button onClick={()=>setLoggedIn(!loggedIn)} className='btn btn-success'>Toggle</button>
        <form onSubmit={handleSubmit}>
           <div className="form-group">
                <label htmlFor="">
                    <input onChange={handleForm} value={product.name} placeholder="name of product" name="name" type="text" className="form-control"></input>
                </label>
            </div> 
            <div className="form-group">
                <label htmlFor="">
                    <input onChange={handleForm} value={product.price}  placeholder="price of product" name="price" type="text" className="form-control"></input>
                </label>
            </div>
            <button className="btn btn-block btn-primary">New Product</button>
        </form>
        {JSON.stringify(product)}
    </div>
  )
}

export default AddProduct