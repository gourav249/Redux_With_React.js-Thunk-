import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PostApiAction } from '../redux/action/action';


const Form = () => {
    const dispatch = useDispatch();
    let history = useNavigate();
    let isResponse = useSelector((state) => state.reducer.isResponse)


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [Country, setCountry] = useState("")

    const handleSubmit = (e) => {
        try {
            e.preventDefault();

            const newData = {
                name: name,
                email: email,
                phone: phone,
                country: Country
            }
            dispatch(PostApiAction(newData))
        } catch (error) {
            console.log(error)
        }
    }

    if (isResponse) {
        alert("Response Submited Succesfully")
        history('/')
    }


    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPhone">Phone</label>
                        <input type="number" className="form-control" id="inputPhone" placeholder="Enter Your Phone" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCountry">Country</label>
                        <input type="text" className="form-control" id="inputCountry" placeholder="Enter Your Country" onChange={(e) => setCountry(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">

                    </div>
                    <div className="form-group col-md-4">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className="form-group col-md-4">

                    </div>
                </div>



            </form>
        </div>
    )
}

export default Form