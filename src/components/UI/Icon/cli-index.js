const fs = require("fs");

let directory_name = "./icons";

let filenames = fs.readdirSync(directory_name);


filenames.forEach((file) => {
  const name = file.split('.')[0]
  const pname = 'Icon' + name.slice(0, name.length - 4)
  const pan =   `export { ${name} as ${pname} } from './icons/${name}'`
  console.log(pan)
});


// rm -rf index.tsx && node cli-index.js >> index.tsx