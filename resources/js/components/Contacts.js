import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom';
export default function Contacts() {
    const [datas, setData] = useState([]);
    useEffect(() => {
        loadUser()
    }, []);
    const loadUser = () => {
        axios.get("/contact").then(response => {
            setData(response.data);
            console.log(response.data);
        });
    };

    const deletedata=async(id)=>{
        await axios.delete(`/contact/${id}`)
        loadUser()  
    };
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                    </tr>
                    
                </thead>
                <tbody>
                {
                datas.map(d=>{
                    return(
                        
                           <tr key={d.id}>
                           <td>{d.fullname}</td>
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                            <td>{d.address}</td>
                            <td>
                            <div style={{display: "flex"}}>
                            <Link className="btn btn-primary" to={`/view/${d.id}`}>View</Link>
                            <Link className="btn btn-success" to={`/edit/${d.id}`}>Edit</Link> 
                            <Link className="btn btn-danger" onClick={()=> deletedata(d.id)}>Delete</Link>  
                          
                            </div>
                            </td>
                        
                           </tr>
                    )
                })
            }
              </tbody>
            </table>
        </div>
    )

    
}
