const wilayah = require('..');

// Cari =  kecamatan: 'Maladum Mes', provinsi: 'PAPUA BARAT', kota: 'KOTA SORONG'

// kecamatan
const kecamatan = wilayah('malad', 'kecamatan');

kecamatan.then(value => {
	console.log('Data kecamatan[MIN]:', value);
});

// Dengan di dalam region
const kecamatanIn1 = wilayah('malad', 'kecamatan', {
	provinsi: 'papua'
});

kecamatanIn1.then(value => {
	console.log('Data kecamatan[in_1]:', value);
});

const kecamatanIn2 = wilayah('malad', 'kecamatan', {
	provinsi: 'papua',
	kota: 'sorong'
});

kecamatanIn2.then(value => {
	console.log('Data kecamatan[in_2]:', value);
});
