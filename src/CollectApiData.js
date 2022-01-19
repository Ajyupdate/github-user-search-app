import { useState } from "react";
import CollectUsername from "./CollectUsername";

const CollectApiData = ({userInput}) => {
    
   console.log(userInput)
   const [userInput, setUserInput] = useState(null);
    const handleSubmit = (e) => {
          e.preventDefault();
          fetch(`https://api.github.com/users/${userInput}`)
            .then(res=>{
                return res.json()
            })
            .then(data =>{
                setUserInput(data)
            })
        console.log(userInput)
    }
    return ( 
        <div>
            <CollectUsername userInput={userInput} handleSubmit={handleSubmit}/>
        </div>
     );
}
 
export default CollectApiData;