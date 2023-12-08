export class ObjUtil {
  static isEmpty = (s: Object | null): boolean => {
    if (isNullOrUndefined(s)) return true
    else return ListUtil.isEmpty(Object.keys(s!))
  }

  static isNotEmpty = (s: Object | null): boolean => {
    return !this.isEmpty(s)
  }
}
