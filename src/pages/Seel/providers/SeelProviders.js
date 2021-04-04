import seelApi from '../../../utils/seelApi';

export default {
	async subscriber({
		name,
		address,
		university,
		city,
		cep,
		phone,
		cpf,
		rg,
		email,
		membership = undefined,
		productSelector,
		courses,
	}) {
		const value = productSelector ? 25 : 50;

		const formattedCpf = cpf.replace(/\.|-/g, '');
		const formattedRg = rg.replace(/\.|-/g, '');

		return await seelApi.post('/subscribers', {
			name,
			address,
			university,
			city,
			cep,
			phone,
			cpf: formattedCpf,
			rg: formattedRg,
			email,
			membership,
			value,
			courses,
		});
	},
};
