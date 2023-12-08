export type response<T> = {
  code: number
  message: string
  success: boolean
  time: number
  data: T
}
