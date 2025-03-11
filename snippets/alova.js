const { TYPES } = require("../src/common/consts/types");
const body = `
import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import ReactHook from 'alova/react';
import { createClientTokenAuthentication } from 'alova/client';
import router from '../router';
function getToken() {
    return localStorage.getItem('token');
}
export const { onAuthRequired } = createClientTokenAuthentication({
    // 配置项
    assignToken: (method) => {
        method.config.headers.Authorization = 'Bearer ' + getToken();
    },
});

export const baseURL = import.meta.env.DEV ? '/api' : '/api';
export const alovaInstance = createAlova({
    baseURL,
    statesHook: ReactHook,
    requestAdapter: adapterFetch(),
    beforeRequest: onAuthRequired((method) => {
        console.log(\`method\`, method);
    }),
    responded: async (response) => {
        // console.log(\`response\`, response);
        let result;
        if (response.status === 500) {
            throw new Error(\`服务器宕机,\${response.statusText}\`);
        }
        try {
            result = await response.json();
        } catch (err: any) {
            // 不是json 的化直接返回非json字段
            return response;
        }
        if (result.status === 'unauthorized') {
            router.navigate(\`403\`);
            // router.navigate(\`login\`);
        }
        if (result.status === 'failed') {
            throw new Error(result.message);
        }
        if (result.status === 'success') {
            return result.payload;
        }
        return result;
    },
});

`
const description = "";

module.exports = {
  prefix: ["!alova"],
  type: [TYPES.typescript, TYPES.typescriptreact],
  description: description || body,
  body: body.trim(),
};
