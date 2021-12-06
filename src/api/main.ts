import * as ax from "axios"

const axios = ax.default.create({
	baseURL:"https://api.open5e.com/"
})

export default axios;