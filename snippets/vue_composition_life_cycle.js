const body = `
on\${1|Mounted,Updated,Unmounted,BeforeMount,BeforeUpdate,BeforeUnmount,ErrorCaptured,RenderTracked,RenderTriggered,Activated,Deactivated,ServerPrefetch|}(async ()=>{
 $2
})
`;
const description = "";

module.exports = {
  prefix: ["!on"],
  type: ["javascript",'typescript'],
  description: description || body,
  body: body.trim(),
};
