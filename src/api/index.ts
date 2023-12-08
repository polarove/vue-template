import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export default class request {
    private instance: AxiosInstance | undefined

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use(
            (config) => {
                console.log(import.meta.env.VITE_APP_BASE_API)

                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )

        this.instance.interceptors.response.use(
            (response) => {
                // do whatever you want
                return Promise.resolve(response.data)
            },
            (error) => {
                return Promise.reject(error)
            }
        )
    }

    public get(url: string, param?: any): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.instance
                ?.get(url, { params: param })
                .then((res: AxiosResponse) => {
                    resolve(res)
                })
                .catch((err: AxiosResponse) => {
                    reject(err)
                })
        })
    }

    public post(url: string, data?: any): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.instance
                ?.post(url, data)
                .then((res: AxiosResponse) => {
                    resolve(res)
                })
                .catch((err: AxiosResponse) => {
                    reject(err)
                })
        })
    }
}
