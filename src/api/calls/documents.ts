import { ApiRoutes } from "../endpoints/routes"
import axios from "../main"

export const getDocuments = async () => {
    let response = await axios.get(ApiRoutes.Documents(""))
    let test = 10
}

// TODO - create async thunk and set state in redux