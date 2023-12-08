export class StrUtil {
  static isString = (s: any): boolean => {
    return typeof s === 'string' && isNotNullOrUndefined(s)
  }

  static isBlank = (s: string | null | undefined): boolean => {
    if (isNullOrUndefined(s)) return true
    else return s?.trim().length === 0
  }

  static isNotBlank = (s: string | null | undefined): boolean => {
    return !this.isBlank(s)
  }

  static isBlankQuery = (s: string | string[]): boolean => {
    return isNullOrUndefined(s) || (Array.isArray(s) && ListUtil.isEmpty(s))
  }
}
