export class ListUtil {
  static isEmpty(list: any[]) {
    return isNullOrUndefined(list) || list.length === 0
  }
  static isNotEmpty(list: any[]) {
    return !this.isEmpty(list)
  }
}
