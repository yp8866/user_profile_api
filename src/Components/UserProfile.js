import React, { useState, useEffect } from 'react';


const UserProfile = ({urlTofetch}) => {
  // states
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetching data from api
  const fetchData= async (url)=>{
    try{
        const response= await fetch(url);
        const data= await  response.json();
        setUserData(data);
      }catch(error){
        console.log("There is Error in Loading the data: ",error)
        setError(error);
    }finally{
        setIsLoading(false);
    }
  }

  useEffect( () => {
    fetchData(urlTofetch);
  }, []);

return isLoading?  
    <p className="mt-20 text-3xl text-center text-white">Loading...</p>
    :
    error ?
      <h2 className="mt-20 text-3xl text-center text-white">{error.message}</h2>
      :    
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/5 mx-auto my-20">
            <div className="w-2/5 mr-5 p-4 rounded-lg shadow-lg">
              <img className="object-cover w-full h-full" src={userData.results[0].picture.large} alt="Profile" />
            </div>
            <div className="w-3/5 p-4">
              <div className="mb-8">
                <div className="text-4xl font-bold">{userData.results[0].name.first} {userData.results[0].name.last}</div>
              </div>
              <div className="mb-8">
                <div className="text-xl capitalize">Gender: {userData.results[0].gender}</div>
              </div>
              <div className="mb-8">
                <div className="text-xl">Phone Number: {userData.results[0].phone}</div>
              </div>
            </div>
          </div>

};

export default UserProfile;
