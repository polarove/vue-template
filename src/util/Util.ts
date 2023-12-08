export const isNullOrUndefined = (s: any): boolean => {
  return s == null || s == undefined
}

export const isNotNullOrUndefined = (s: any): boolean => {
  return !isNullOrUndefined(s)
}
