import fs from 'fs-extra'
import path from 'path'
import { red } from 'picocolors'
import { getFileType } from './utils'
import { color } from './constants'

export function generateTree(targetDir: string, options: any = {}) {
  const { prefix = '' } = options

  try {
    const files = fs.readdirSync(targetDir)
    files.forEach((file, index) => {
      const filePath = path.join(targetDir, file)
      const isLast = index === files.length - 1
      const connector = isLast ? '└── ' : '├── '
      const type = getFileType(filePath)
      const coloredFn = color[type] || ((s) => s)
      console.log(`${prefix} ${coloredFn(file)}`)
      if (type === 'directory') {
        const newPrefix = prefix + connector + (isLast ? '    ' : '│   ')
        generateTree(filePath, { ...options, prefix: newPrefix })
      }
    })
  } catch (error) {
    console.error(red(`Error reading directory: ${targetDir}`))
    return
  }
}
