export class DeviceUtil {
  static isMobile = (): boolean => {
    return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  }

  static isDesktop = (): boolean => {
    return !this.isMobile()
  }

  static isAndroid = (): boolean => {
    return /Android/i.test(navigator.userAgent)
  }

  static isNotAndroid = (): boolean => {
    return !this.isAndroid()
  }

  static isIOS = (): boolean => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent)
  }

  static isNotIOS = (): boolean => {
    return !this.isIOS()
  }

  static isWindows = (): boolean => {
    return /Windows/i.test(navigator.userAgent)
  }

  static isNotWindows = (): boolean => {
    return !this.isWindows()
  }

  static isMacOS = (): boolean => {
    return /Mac OS/i.test(navigator.userAgent)
  }

  static isNotMacOS = (): boolean => {
    return !this.isMacOS()
  }

  static getUserAgent = (): string => {
    return navigator.userAgent
  }
}
