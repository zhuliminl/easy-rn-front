const fs = require("fs");


let directory_name = "./icons";

let filenames = fs.readdirSync(directory_name);


console.log(`import React from 'react'`)
filenames.forEach((file) => {
  const name = file.split('.')[0]
  const pname = 'Icon' + name.slice(0, name.length - 4)
  const pan = `<${name} />`
  console.log(`import { ${pname} } from '.'`)
});

console.log(`
export default () => {
  return (
    <>
`)

filenames.forEach((file) => {
  const name = file.split('.')[0]
  const pname = 'Icon' + name.slice(0, name.length - 4)
  const pan = `<${pname} color='#333' width='48' height='48'/>`
  console.log(pan)
});

console.log(`
</>
)
}
`)

// rm -rf allIcons.tsx && node cli-all-icons.js >> allIcons.tsx