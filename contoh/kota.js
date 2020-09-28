const wilayah = require('..');

// Cari = kota: 'KOTA BANDA ACEH', provinsi: 'ACEH'

// kota atau kabupaten
const kota = wilayah('AC', 'kota');

kota.then(value => {
	console.log('Data Kota/Kabupatan:', value);
});

// Dengan di dalam region
const kotaIn = wilayah('AC', 'kota', {
	provinsi: 'aceh'
});

kotaIn.then(value => {
	console.log('Data Kota/Kabupatan[in]:', value);
});
