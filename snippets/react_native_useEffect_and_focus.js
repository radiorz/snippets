const { origin: file_name } = require("./file_name");

const body = `

useEffect(()=>{
  console.log(\`${file_name}useEffect 进来了 \`,)
  return ()=>{
    console.log(\`${file_name}useEffect 退出了\`,)
  }
})
// import { useFocusEffect } from '@react-navigation/native';
useFocusEffect(()=>{
  console.log(\`${file_name}useFocusEffect 进来了 \`,)
  return ()=>{
    console.log(\`${file_name}useFocusEffect 退出了\`,)
  }
})
`;
const description = "";

module.exports = {
  prefix: ["!useFocus"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
