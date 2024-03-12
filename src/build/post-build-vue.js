import process from 'child_process'
import { resolve } from 'path'
import fs from 'fs'
const dist = resolve('./dist')
const FILE_NAME = './dist/dist.zip'
const OUTPUT = './dist/'

;(function () {
  if (fs.existsSync(FILE_NAME)) {
    fs.unlinkSync(FILE_NAME)
    console.log('previous build has been removed: ' + FILE_NAME)
  }
  console.log('[部署]：需要提前安装bandizip对dist进行压缩')
  process.exec(`bandizip c -y ${FILE_NAME} ${OUTPUT}`, (err) => {
    if (!err) {
      process.exec(`explorer ${dist}`)
    } else {
      console.warn(err)
    }
  })
})()
