// 参考 https://v2.vuejs.org/v2/guide/custom-directive#ad
const body = `
  export default {
    // 当：指令首次绑定调用一次
    // bind(el,binding,){}
    // 当：插入到父元素
    inserted(el,binding,vnode){
      $1
    },
    // 当：每次 vnode 更新时调用
    // update(el,binding) {},
    // 当: vnode 或子 vnode 更新时调用
    // componentUpdated(){},
    // 当：指令与元素解绑，仅调用一次
    // unbind(){}
  }
`
const description = "";

module.exports = {
  prefix: ["!directive_v2",'!zl2'],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
