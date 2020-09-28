/* eslint-disable camelcase */
const test = require('ava');
const wilayah = require('..');

test('Provinsi', async t => {
	const provinsi = await wilayah('SULAWESI UTARA', 'provinsi');

	t.is(JSON.stringify(provinsi), JSON.stringify([
		{
			kode: {
				id_provinsi: 71
			},
			provinsi: 'SULAWESI UTARA'
		},
		{
			kode: {
				id_provinsi: 76
			},
			provinsi: 'SULAWESI BARAT'
		}
	]));
});

test('Kota', async t => {
	const kota = await wilayah('ACEH SELATAN', 'kota');

	t.is(JSON.stringify(kota), JSON.stringify([
		{
			kode: {
				id_provinsi: 11,
				id_kota: 1
			},
			kota: 'KAB. ACEH SELATAN',
			provinsi: 'ACEH'
		}
	]

	));
});

test('Kecamatan', async t => {
	const kecamatan = await wilayah('Malabotom', 'kecamatan');

	t.is(JSON.stringify(kecamatan), JSON.stringify([
		{
			kode: {
				id_provinsi: 92, id_kota: 1, id_kecamatan: 49
			},
			kecamatan: 'Malabotom',
			provinsi: 'PAPUA BARAT',
			kota: 'KAB. SORONG'
		}
	]
	));
});

test('Kelurahan', async t => {
	const kelurahan = await wilayah('Gamalama', 'kelurahan');

	t.is(JSON.stringify(kelurahan), JSON.stringify([
		{
			kode: {
				id_provinsi: 82,
				id_kota: 71,
				id_kecamatan: 6,
				id_kelurahan: 1009
			},
			kelurahan: 'Gamalama',
			provinsi: 'MALUKU UTARA',
			kota: 'KOTA TERNATE',
			kecamatan: 'Kota Ternate Tengah'
		}
	]
	));
});
