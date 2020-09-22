const wilayah = require('../index');

// cari =  kecamatan: 'Maladum Mes', provinsi: 'PAPUA BARAT', kota: 'KOTA SORONG'

// kecamatan
const kecamatan = wilayah('malad', 'kecamatan');

kecamatan.then(val => {
	console.log('Data kecamatan[MIN]: ', val);
});

// dengan di dalam region
const kecamatan_in_1 = wilayah('malad', 'kecamatan', {
	provinsi: 'papua',
});

kecamatan_in_1.then(val => {
	console.log('Data kecamatan[in_1]: ', val);
});

const kecamatan_in_2 = wilayah('malad', 'kecamatan', {
	provinsi: 'papua',
	kota: 'sorong',
});

kecamatan_in_2.then(val => {
	console.log('Data kecamatan[in_2]: ', val);
});
