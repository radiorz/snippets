const body = `

useEffect(()=>{
  console.log(\`useEffect 进来了 \`,)
  return ()=>{
    console.log(\`useEffect 退出了\`,)
  }
})
// import { useFocusEffect } from '@react-navigation/native';
useFocusEffect(()=>{
  console.log(\`useEffect 进来了 \`,)
  return ()=>{
    console.log(\`useEffect 退出了\`,)
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
