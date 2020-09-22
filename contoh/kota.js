const wilayah = require('../index');

// cari = kota: 'KOTA BANDA ACEH', provinsi: 'ACEH'

// kota atau kabupaten
const kota = wilayah('AC', 'kota');

kota.then(val => {
	console.log('Data Kota/Kabupatan: ', val);
});

// dengan di dalam region
const kota_in = wilayah('AC', 'kota', {
	provinsi: 'aceh',
});

kota_in.then(val => {
	console.log('Data Kota/Kabupatan[in]: ', val);
});
