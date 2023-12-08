import ExampleController from './instance'

export const PostExample = (data: any): Promise<response<string>> => {
    return ExampleController.post('/post/url', data)
}

export const GetExample = (name: string): Promise<response<string>> => {
    return ExampleController.get('/get/url', { name })
}

export const GetTeamDetailExmaple = (id: id): Promise<response<string>> => {
    return ExampleController.get('/get/url', { id })
}
