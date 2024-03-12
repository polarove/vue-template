import ExampleController from './instance'

export const PostExample = (data: any): Promise<Restful<string>> => {
  return ExampleController.post('/post/url', data)
}

export const GetExample = (name: string): Promise<Restful<string>> => {
  return ExampleController.get('/get/url', { name })
}

export const GetTeamDetailExmaple = (id: id): Promise<Restful<string>> => {
  return ExampleController.get('/get/url', { id })
}
