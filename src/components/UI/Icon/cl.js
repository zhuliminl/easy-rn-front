// node cl.js 创建一次 index.tsx
const fs = require("fs");

const titleCase = str => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`

let directory_name = "./svg";

let filenames = fs.readdirSync(directory_name);


filenames.forEach((file) => {
  const name = file.split('.')[0]
  const cname = name.slice(0, name.length - 5).split('-').map(titleCase).join('')
  // const pan = `import { ReactComponent as ${cname} } from './svg/${name}.svg'`
  // const pan = `'${cname}': ${cname},`
  // const pan = `export const Icon${cname} = (props: IconProps) => {
  const pan = `<Icon${cname} />`
 
 
  console.log(pan)
});
