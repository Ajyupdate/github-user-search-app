import { useState } from "react";
// import CollectApiData from "./CollectApiData";


const CollectUsername = () => {
    const [userInput, setUserInput] = useState('');
    const [userName, setUserName] = useState('');
    const [dateCreated, setDateCreated] = useState('2-3-21');
    const [loginName, setLoginName] = useState('2-3-21');
    const [bio, setBio] = useState('2-3-21');
    const [NoOfRepos, setNoOfRepos] = useState('2-3-21');
    const [noOfFollowers, setNoOfFollowers] = useState('2-3-21');
    const [noOfFollowing, setNoOfFollowing] = useState('2-3-21');
    const [location, setlocation] = useState('2-3-21');
    const [twitterHandle, settwitterHandle] = useState('2-3-21');
    const [blog, setBlog] = useState('2-3-21');
    
    

    const handleSubmit = (e) => {
          e.preventDefault();
          fetch(`https://api.github.com/users/${userInput}`)
            .then(res=>{
                return res.json()
            })
            .then(data =>{
                setUserInput(data)
                setUserName(data.name)
                setDateCreated(data.created_at)
                console.log(userName)
            })
        
    }
    
    return ( 
        <div>

            <div className=" text-dark">
                <div className="container p-5">
                    <div className="row text-white heading">
                        <div className="col-md-6">
                            <h4>devfinder</h4>
                        </div>
                        <div className="col-md-6">
                            <h6 className="text-uppercase">light</h6>
                        </div> 
                    </div>

                    <div className="row  ">
                        <div className="col-md-6 m-auto  input-icons">
                        
                            <form onSubmit={handleSubmit}>
                            <i className="fa fa-search icon"></i>
                            <input type="search" className="form-control input-form"  onChange={e => setUserInput(e.target.value)} />
                            <button type="submit" className="icon SearchButton" >Search</button>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 card  m-auto input-icons">
                            <div className="card-block text-white">
                                
                                <div className="row" >
                                    <div className="col-md-2 dev-image">
                                        {/* <img src={user.img}/> */}
                                        HEY
                                    </div>

                                    <div className="col-md-10 text-dark">
                                        <div className="row flex-container">
                                            <div className="flex-one">
                                                <h2>{userName}</h2>
                                            </div>
                                            <div className="flex-one">
                                                <h2>{dateCreated}</h2>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            
                                
                            </div>
                            {/* <CollectApiData userInput={userInput} />     */}
                                
                        </div>

                    </div>

                </div>
                    
            </div>




        
        
        
        
        </div>
     );
}
 
export default CollectUsername;