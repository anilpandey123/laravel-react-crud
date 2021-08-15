import { values } from 'lodash'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

export default function AddContact() {
    let history = useHistory();

    const [values, setValues] = useState({ fullname: "", email: "", phone: "", address: "" })

    const loadInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const updateContact = (e) => {
        e.preventDefault();
        axios.post("/contact", values).then(response => {
            setValues({ fullname: "", email: "", phone: "", address: "" });
            history.push('/');
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
                    <input type="submit" className="btn btn-primary" value="Add Conatct" />
                </div>
            </form>
        </div>
    )
}
