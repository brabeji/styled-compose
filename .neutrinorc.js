module.exports = {
	use: [
		'@usertech/neutrino-preset-eslint-prettier',
		[
			'@neutrinojs/library',
			{
				name: 'styled-compose',
			},
		],
	],
};
