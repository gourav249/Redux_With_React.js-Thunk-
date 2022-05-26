import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DeleteApiAction, GetApiAction } from '../redux/action/action';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const responseData = useSelector((state) => state.reducer.details)
    const isDeleteResponse = useSelector((state) => state.reducer.isDeleteResponse)

    console.log(responseData)

    useEffect(() => {

        dispatch(GetApiAction())

    }, [dispatch])


    const handleDelete = (id) => {
        dispatch(DeleteApiAction(id))
    }

    if (isDeleteResponse) {
        alert("Your data has been deleted !");
        window.location.reload(false)
    }


    const response = responseData ? responseData?.map((data, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.country}</td>
                <td>
                    <Link to={`/edit/${data.id}`}>
                        <span className="delete-pointer">
                            <Icon icon="akar-icons:chat-edit" color="green" fontSize={30} />
                        </span>

                    </Link>
                </td>
                <td>

                    <span onClick={() => handleDelete(data.id)} className="delete-pointer">
                        <Icon icon="fluent:delete-24-regular" color="red" fontSize={30} />
                    </span>

                </td>
            </tr>
        )
    }) : null

    return (
        <div>

            <h1 style={{ textAlign: "center" }}>React Redux Crud Operation | <Link to={`/form`}>Insert Operation </Link></h1>

            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Country</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {response}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home