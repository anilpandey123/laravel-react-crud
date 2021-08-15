import axios from 'axios';
import React ,{ useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function ViewContact() {
    const { id } = useParams();

    const [values, setvalues] = useState({ fullname: "", email: "", phone: "", address: "" })

    const loadUser = () => {
    axios.get(`/contact/edit/${id}`).then(result=>{
        console.log(result);
        setvalues(result.data) });
    }
    useEffect(()=>{
    loadUser();
    },[]);
    return (
        <div>

            <div class="container">
                <h1>View Contact</h1>
                <tr>
                    <h1>ID::{id}</h1>
                    <h1>FullName::{values.fullname}</h1>
                    <h1>Email::{values.email}</h1>
                    <h1>Phone::{values.phone}</h1>
                    <h1>Address::{values.address}</h1>

                </tr>
                <form action="/">
                    <button class="btn btn-primary">Back To Contact</button>
                </form>
            </div>
        </div>
    )
}
