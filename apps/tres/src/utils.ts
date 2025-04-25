import fs from 'fs-extra'
import path from 'path'

import { file_type, file_extension } from './constants'

export function getFileType(filePath: string): string {
  if (fs.statSync(filePath).isDirectory()) {
    return file_type.directory
  }

  const ext = path.extname(filePath).toLowerCase()
  const types = Object.keys(file_extension)
  for (const type of types) {
    if (file_extension[type].includes(ext)) {
      return type
    }
  }
  if (path.basename(filePath).startsWith('.')) {
    return file_type.hidden
  }

  return file_type.error
}
