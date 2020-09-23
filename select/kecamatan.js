const fs = require('fs');
const path = require('path');
const Fuse = require('fuse.js');

const provinsi = function(searchQuery, in_region) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path.join(__dirname, '../data/kecamatan.json'), (err, data) => {
			if (err) reject(err);
			let dataJSON = JSON.parse(data);

			let options = {
				threshold: 0.2,
				keys: ['kecamatan'],
			};

			if (in_region) {
				let dataWithRegion = dataJSON;
				if (in_region.provinsi) {
					const fuseProvinsi = new Fuse(dataWithRegion, {
						threshold: 0.2,
						keys: ['provinsi'],
					});
					const resultProvinsi = fuseProvinsi.search(in_region.provinsi);

					const dataConvertProvinsi = [];
					resultProvinsi.forEach(el => {
						dataConvertProvinsi.push(el.item);
					});
					dataWithRegion = dataConvertProvinsi;
				}

				if (in_region.kota) {
					const fuseKota = new Fuse(dataWithRegion, {
						threshold: 0.2,
						keys: ['kota'],
					});
					const resultKota = fuseKota.search(in_region.kota);

					const dataConvertKota = [];
					resultKota.forEach(el => {
						dataConvertKota.push(el.item);
					});
					dataWithRegion = dataConvertKota;
				}

				const fuseKecamatan = new Fuse(dataWithRegion, {
					threshold: 0.2,
					keys: ['kecamatan'],
				});

				const resultKecamatan = fuseKecamatan.search(searchQuery);

				const dataConvertKecamatan = [];
				resultKecamatan.forEach(el => {
					dataConvertKecamatan.push(el.item);
				});

				resolve(dataConvertKecamatan);
			} else {
				const fuse = new Fuse(dataJSON, options);

				const result = fuse.search(searchQuery);

				const dataConvert = [];
				result.forEach(el => {
					dataConvert.push(el.item);
				});

				resolve(dataConvert);
			}
		});
	});
};

module.exports = provinsi;
