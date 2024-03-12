import process from 'child_process'
import { resolve } from 'path'
const dist = resolve('..\\dist\\')

;(function () {
  console.log('[部署]：需要提前安装bandizip对dist进行压缩')
  process.exec('bandizip c -y ../dist/dist.zip ../dist/', (err) => {
    if (!err) {
      process.exec(`explorer ${dist}`)
    } else {
      console.warn(err)
    }
  })
})()
