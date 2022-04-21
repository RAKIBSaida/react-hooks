import React,{useState,useEffect} from 'react'
import { UserContext } from '../context/UserContext';
import AddProduct from './AddProduct';

const Product=()=> {
    const [listProducts,setListProducts]=useState( [
        {id:1,name:"iphone",price:10000},
        {id:2,name:"oppo",price:3000},
        {id:3,name:"sumsung",price:4000}
    ]);
    // const [listProducts,setListProducts]=useState( []);
    const[counter,setCounter]=useState(0);

    //on peut utiliser plusieurs useEffect 
    useEffect(()=>{   //s'execute au chargement de component; useEffect<==>component/WillMount/DidMount/DidUpdate...
        // setListProducts([
        //     {id:1,name:"iphone",price:10000},
        //         {id:2,name:"oppo",price:3000},
        //         {id:3,name:"sumsung",price:4000}
        // ])
        console.log("salam") //salam sera afficher dans le cas du modification de listProducts
       
    },[listProducts])
    useEffect(()=>{   
        console.log("salam2") 
       
    },[])//==>juste dans le cas willMount (pas dans le cas des modifications)

    useEffect(()=>{   
        console.log("salam3") 
       
    })//==>dans le cas de n'importe quelle modification
    const addNewProduct=(newProduct)=>{
        // console.log(newProduct);
        setListProducts(
            [newProduct,...listProducts]
        )
    }
    const incrementer=()=>{
        setCounter(counter+1);
    }
  return (
    <div>
       <UserContext.Consumer> 
           {
               loggedIn=>console.log("Product",loggedIn)
           }
        </UserContext.Consumer> 
        <div>
            <h3>{counter} </h3>
            <button onClick={incrementer}>Incrémenter</button>
           
        </div>
        <AddProduct addNewProduct={addNewProduct}></AddProduct>
        <hr/>
      <table>
          <thead>
            <tr>
                <th>Id</th>    
                <th>Name</th>  
                <th>Price</th>  
            </tr>  
        </thead>   
        <tbody>
        {
            listProducts.map(product=>(
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
             ))
            }
        </tbody>
     </table> 
     
    </div>
  )
}

export default Product