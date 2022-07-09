import { Open5eEndpoints } from "../endpoints/open5eApi"
import axios from "../main"

export const getDocuments = async () => {
    let response = await axios.get(Open5eEndpoints.Documents.GetByQuery(""))
    let test = 10
}

// TODO - create async thunk and set state in redux