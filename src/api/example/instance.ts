import request from '@api/index'

// ExampleController
const BASR_API = import.meta.env.VITE_APP_BASE_API as string
const BASR_ORIGIN = import.meta.env.VITE_APP_BASE_ORIGIN as string

const ExampleController: request = new request({
    baseURL: BASR_API + '/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASR_ORIGIN,
    },
    withCredentials: true,
})

export default ExampleController
