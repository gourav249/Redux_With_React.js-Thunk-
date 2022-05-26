import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import getDetailsByHooks from '../hooks/getDetailsByHooks';
import { UpdateApiAction } from '../redux/action/action';

const UpdateDetails = () => {
    const { id } = useParams()

    const [detailsById] = getDetailsByHooks(id);

    const dispatch = useDispatch();

    let history = useNavigate();






    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("")

    const data = (detailsById) => {
        if (detailsById?.data) {
            setName(detailsById?.data?.name)
            setEmail(detailsById?.data?.email)
            setPhone(detailsById?.data?.phone)
            setCountry(detailsById?.data?.country)
        }
    }

    useEffect(() => {

        data(detailsById)

    }, [detailsById])

    var isUpdateResponse = useSelector((state) => state.reducer.isUpdateResponse)

    const handleSubmit = (e) => {

        try {
            e.preventDefault();

            const newData = {
                name: name,
                email: email,
                phone: phone,
                country: country
            }
            dispatch(UpdateApiAction(newData, id))
        } catch (error) {

        }
    }

    if (isUpdateResponse) {
        alert("Update Sucessfully")
        history(`/`)
    }
    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPhone">Phone</label>
                        <input type="number" className="form-control" id="inputPhone" placeholder="Enter Your Phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCountry">Country</label>
                        <input type="text" className="form-control" id="inputCountry" placeholder="Enter Your Country" onChange={(e) => setCountry(e.target.value)} value={country} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">

                    </div>
                    <div className="form-group col-md-4">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                    </div>
                    <div className="form-group col-md-4">

                    </div>
                </div>



            </form>
        </div>
    )
}

export default UpdateDetails