import request from '@/utils/request';

/**
 * cross 跨域调用第三方接口
 * @method signIn 调用NotionAPI
 * @method signOut 用户退出登录
 */
export function useCrossApi() {
	return {
		notionExec: (params) => {
			return request({
                url: 'https://cross.vercel.qingqian.fun/',
                method: 'post',
                data: { type: 'notion', ...params },
                headers: { token: 'ff768bfc-07c6-3951-0f1f-15f6bc3d6fcf' },
            });
		}
	};
}
