import { values } from 'lodash'
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditContact() {
    let history = useHistory();
    const { id } = useParams();

    const [values, setValues] = useState({ fullname: "", email: "", phone: "", address: "" })

    const loadInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const updateContact = async(e) => {
        e.preventDefault();
        await axios.patch(`/contact/update/${id}`, values)
        history.push("/");
    }
    useEffect(() => {
        loadUser()
    }, []);
    const loadUser = () => {
        axios.get(`/contact/edit/${id}`).then(response => {
            console.log(response);
            setValues(response.data);
        })
    }
    return (
        <div>
            <form onSubmit={updateContact}>
                <div>
                    <input type="text" name="fullname" className="form-control" value={values.fullname}
                        onChange={loadInput} placeholder="enter your fullname" required />
                </div>
                <div>
                    <input type="email" name="email" className="form-control" value={values.email}
                        onChange={loadInput} placeholder="enter your email" required />
                </div>
                <div>
                    <input type="text" name="phone" className="form-control" value={values.phone}
                        onChange={loadInput} placeholder="enter your phone" required />
                </div>
                <div>
                    <input type="text" name="address" className="form-control" value={values.address}
                        onChange={loadInput} placeholder="enter your address" required />
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Update Conatct" />
                </div>
            </form>
        </div>
    )
}
