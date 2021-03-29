import seelApi from '../utils/seelApi';

export default {
	getList: async (resource, params) => {
		const { data } = await seelApi.get(`/subscribers`, {
			headers: {
				Authorization: 'seelcomplex',
			},
		});
		return { data, total: data.length };
	},
};
