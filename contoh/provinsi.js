const wilayah = require('../index');

// cari = provinsi: 'SULAWESI BARAT'

const provinsi = wilayah('sulawesi', 'provinsi');

provinsi.then(val => {
	console.log('Data Provinsi: ', val);
});
