import React,{useEffect, useState} from 'react';
 function CardDisplay(){
    const [user,setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData =()=>{
    setIsLoading(true);
    fetch('https://randomuser.me/api/?results=20')
    .then((response) =>{
        return response.json();
    }).then((data)=>{
        let userdata = data.results
        setUser(userdata)
        setIsLoading(false)
    })
  }

  useEffect(()=>{
      fetchData();
  },[])
    return (
          <div className='body'>
           <div className='container'>
            
              <h2>Random User API</h2>
            
       
           
            
              
              <div className='center-card' style={{border:"1px solid red",textAlign:"center"}}>
              
                <div className='table' style={{textAlign:"center"}}>
                    <table>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>City</th>
                      </tr>
                      {user.map(data => (
                      <tr>
                        <td><img variant="top" src={data.picture.large} alt="image" /></td>
                        <td> <p>{data.name.first +" " +data.name.last}</p></td>
                        <td> <p> {data.gender}</p></td>
                        <td> <h6> {data.email}</h6></td>
                        <td><p>{data.location.city +", " +data.location.state}</p></td>
                      </tr> ))}
                    </table>
                </div>
              </div>
           
              
           </div>
            
        </div>
      );
 }
 export default CardDisplay