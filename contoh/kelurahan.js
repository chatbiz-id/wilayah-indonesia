const wilayah = require('../index');

// cari = kelurahan: 'Malamas', provinsi: 'PAPUA BARAT', kota: 'KAB. SORONG', kecamatan: 'Segun'

// kecamatan
const kelurahan = wilayah('malamas', 'kelurahan');

kelurahan.then(val => {
	console.log('Data kelurahan[MIN]: ', val);
});

// // dengan di dalam region
const kelurahan_in_1 = wilayah('malamas', 'kelurahan', {
	provinsi: 'papua',
});

kelurahan_in_1.then(val => {
	console.log('Data kelurahan[in_1]: ', val);
});

const kelurahan_in_2 = wilayah('malamas', 'kelurahan', {
	provinsi: 'papua',
	kota: 'sorong',
});

kelurahan_in_2.then(val => {
	console.log('Data kelurahan[in_2]: ', val);
});

const kelurahan_in_3 = wilayah('malamas', 'kelurahan', {
	provinsi: 'papua',
	kota: 'sorong',
	kecamatan: 'segun',
});

kelurahan_in_3.then(val => {
	console.log('Data kelurahan[in_3]: ', val);
});
