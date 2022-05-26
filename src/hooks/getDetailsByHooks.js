import { useEffect, useState } from "react";
import { GetDetailsById } from "../api/axiosRequest";

const GetDetailsByHooks = (props) => {

    const [detailsById, setDetailsById] = useState()

    const GetDetailsByHooks = async (requestId) => {

        return GetDetailsById(requestId).then((res) => {
            console.log("Response Data is _____", res);
            setDetailsById(res)
        });

    }

    useEffect(() => {
        GetDetailsByHooks(props)
    }, [props])

    return [detailsById]

}
export default GetDetailsByHooks