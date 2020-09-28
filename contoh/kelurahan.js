const wilayah = require('..');

// Kecamatan
const kelurahan = wilayah('malamas', 'kelurahan');

kelurahan.then(value => {
	console.log('Data kelurahan[MIN]:', value);
});

// Dengan di dalam region
const kelurahanIn1 = wilayah('malamas', 'kelurahan', {
	provinsi: 'papua'
});

kelurahanIn1.then(value => {
	console.log('Data kelurahan[in_1]:', value);
});

const kelurahanIn2 = wilayah('malamas', 'kelurahan', {
	provinsi: 'papua',
	kota: 'sorong'
});

kelurahanIn2.then(value => {
	console.log('Data kelurahan[in_2]:', value);
});

const kelurahanIn3 = wilayah('malamas', 'kelurahan', {
	provinsi: 'papua',
	kota: 'sorong',
	kecamatan: 'segun'
});

kelurahanIn3.then(value => {
	console.log('Data kelurahan[in_3]:', value);
});
