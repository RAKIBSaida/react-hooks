import React,{useState,useEffect, useReducer} from 'react'
import { UserContext } from '../context/UserContext';
import AddProduct from './AddProduct';
const stateIntialize={
    listProducts:[
        {id:1,name:"iphone",price:10000},
            {id:2,name:"oppo",price:3000},
            {id:3,name:"sumsung",price:4000}
    ],
    counter:0
};
const reducer=(state,action)=>{
switch(action.type){
    case'ADD_PRODUCT':{
        return{
            ...state,
            listProducts:[...state.listProducts,action.payload]
        }
    }
    case 'INCREMENT':{
        return{
            ...state,
            counter:state.counter+1
        }
    }  case 'DECREMENT':{
        return{
            ...state,
            counter:state.counter-1
        }
    }
    default:{
        return state;
    }
}
}
const Product=()=> {
    //******************************** */
    // const [listProducts,setListProducts]=useState( [
    //     {id:1,name:"iphone",price:10000},
    //     {id:2,name:"oppo",price:3000},
    //     {id:3,name:"sumsung",price:4000}
    // ]);
    // // const [listProducts,setListProducts]=useState( []);
    // const[counter,setCounter]=useState(0); 

    const [state,dispatch]=useReducer(reducer,stateIntialize);

    //on peut utiliser plusieurs useEffect 
    useEffect(()=>{   //s'execute au chargement de component; useEffect<==>component/WillMount/DidMount/DidUpdate...
        // setListProducts([
        //     {id:1,name:"iphone",price:10000},
        //         {id:2,name:"oppo",price:3000},
        //         {id:3,name:"sumsung",price:4000}
        // ])
        console.log("salam") //salam sera afficher dans le cas du modification de listProducts
       
    },[state.listProducts])

    useEffect(()=>{   
        console.log("salam2") 
       
    },[])//==>juste dans le cas willMount (pas dans le cas des modifications)

    useEffect(()=>{   
        console.log("salam3") 
       
    })//==>dans le cas de n'importe quelle modification
    //********************************** */
    const addNewProduct=(newProduct)=>{
        // console.log(newProduct);
        // setListProducts(
        //     [newProduct,...listProducts]
        // )
        dispatch({type:'ADD_PRODUCT',payload:newProduct})
    }
    const incrementer=()=>{
        // setCounter(counter+1);
        dispatch({type:'INCREMENT'})
    }
    const decrementer=()=>{
        // setCounter(counter+1);
        dispatch({type:'DECREMENT'})
    }
  return (
    <div>
       <UserContext.Consumer> 
           {
               loggedIn=>console.log("Product",loggedIn)
           }
        </UserContext.Consumer> 
        <div>
            <h3>{state.counter} </h3>
            <button onClick={incrementer}>Incrémenter</button>
            <button onClick={decrementer}>Décrémenter</button>
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
            state.listProducts.map(product=>(
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