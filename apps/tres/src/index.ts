import mri from 'mri'; 
import path from 'node:path';
import colors from 'picocolors'
const {blue, yellow, red, green} = colors;
/**
 * @description 「常量定义」：长久存储的配置
 */
const CONFIG_PATH = path.join(process.cwd(), '.tresrc.json')

/**
 * @description 「常量定义」：文件夹/文件 颜色
 */
const FILE_ICON = {
  DIR: yellow,
  FILE: green,
  LINK: blue,
}

/**
 * @description 命令行参数解析
 */
const argv = mri<{
  dir?: string, // 指定目录
  exclude?: string, // 屏蔽指定目录（逗号分隔）
  depth?: number, // 深度
  config?: string, // 自定义配置文件路径,
  folderDepth?: number, // 单独文件夹深度
  output: string, // 输出文件路径
}>(process.argv.slice(2), {
  alias: {
    d: 'dir',
    e: 'exclude',
    c: 'config',
    dp: 'depth',
    fdp: 'folderDepth',
    o: 'output',
  },
  string: ['dir', 'exclude', 'config', 'output'],
  default: {
    dir: process.cwd(),
    exclude: '',
    config: CONFIG_PATH,
    depth: 10,
    folderDepth: 1,
    output: 'tree.txt',
  }
})

/**
 * @description 主函数
 */
function init() {
  console.log(red('Hello, world!'));
}

void init()