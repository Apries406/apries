import {
  blue,
  green,
  white,
  yellow,
  magenta,
  cyan,
  red,
  gray,
} from 'picocolors'

export const color: Record<string, (text: string) => string> = {
  directory: blue, // 目录
  executable: green, // 可执行文件
  text: white, // 文本文件
  config: yellow, // 配置文件
  code: magenta, // 代码文件
  compressed: cyan, // 压缩文件
  media: magenta, // 媒体文件
  unknown: red, // 错误 or 无权限文件
  hidden: gray, // 隐藏文件
}

export const file_type = {
  directory: 'directory',
  executable: 'executable',
  text: 'text',
  config: 'config',
  code: 'code',
  compressed: 'compressed',
  media: 'media',
  error: 'error',
  hidden: 'hidden',
  unknown: 'unknown',
}

export const file_icon = {
  directory: '📁',
  executable: '🖥️',
  text: '📄',
  config: '⚙️',
  code: '💻',
  compressed: '📦',
  media: '🎥',
  unknown: '❌',
  hidden: '👻',
}

export const file_extension: Record<string, string[]> = {
  executable: ['.exe', '.bat', '.sh', '.app'],
  text: ['.txt', '.md', '.json', '.xml', '.csv'],
  config: ['.json', '.yml', '.yaml', '.toml'],
  code: [
    '.js',
    '.ts',
    '.py',
    '.java',
    '.cpp',
    '.c',
    '.go',
    '.rb',
    '.php',
    '.dart',
    '.swift',
    '.rs',
    '.html',
    '.css',
    '.scss',
    '.less',
    '.vue',
    '.jsx',
    '.tsx',
  ],
  compressed: ['.zip', '.tar', '.gz', '.rar', '.7z', '.xz'],
  media: ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mp3', '.wav'],
  // hidden 文件默认以 . 开头
}
