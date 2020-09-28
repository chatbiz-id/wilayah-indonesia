const wilayah = require('..');

// Cari = provinsi: 'SULAWESI BARAT'

const provinsi = wilayah('sulawesi', 'provinsi');

provinsi.then(value => {
	console.log('Data Provinsi:', value);
});
