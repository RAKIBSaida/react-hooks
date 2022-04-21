import { useState } from "react";
import Product from "./components/Product";
import {UserContext}from "./context/UserContext";

function App() {
  const [loggedIn,setLoggedIn]=useState(true);
  return (
    <div className="App container"> 
      <div className="row">
        <div className="col">
          <h1>hello world</h1>
          <hr/>
          <UserContext.Provider value={{loggedIn,setLoggedIn}}>
            {/* loggedIn accessible via le component Product et meme par ses components fils*/ }
              <Product/>
          </UserContext.Provider>
          
        </div>
      </div>

    </div>
  );
}

export default App;
