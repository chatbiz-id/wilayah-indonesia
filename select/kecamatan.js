const fs = require('fs');
const path = require('path');
const Fuse = require('fuse.js');

const provinsi = (searchQuery, inRegion) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, '../data/kecamatan.json'), (err, data) => {
			if (err) {
				reject(err);
			}

			const dataJSON = JSON.parse(data);

			const options = {
				threshold: 0.2,
				keys: ['kecamatan']
			};

			if (inRegion) {
				let dataWithRegion = dataJSON;
				if (inRegion.provinsi) {
					const fuseProvinsi = new Fuse(dataWithRegion, {
						threshold: 0.2,
						keys: ['provinsi']
					});
					const resultProvinsi = fuseProvinsi.search(inRegion.provinsi);

					const dataConvertProvinsi = [];
					resultProvinsi.forEach(element => {
						dataConvertProvinsi.push(element.item);
					});
					dataWithRegion = dataConvertProvinsi;
				}

				if (inRegion.kota) {
					const fuseKota = new Fuse(dataWithRegion, {
						threshold: 0.2,
						keys: ['kota']
					});
					const resultKota = fuseKota.search(inRegion.kota);

					const dataConvertKota = [];
					resultKota.forEach(element => {
						dataConvertKota.push(element.item);
					});
					dataWithRegion = dataConvertKota;
				}

				const fuseKecamatan = new Fuse(dataWithRegion, {
					threshold: 0.2,
					keys: ['kecamatan']
				});

				const resultKecamatan = fuseKecamatan.search(searchQuery);

				const dataConvertKecamatan = [];
				resultKecamatan.forEach(element => {
					dataConvertKecamatan.push(element.item);
				});

				resolve(dataConvertKecamatan);
			} else {
				const fuse = new Fuse(dataJSON, options);

				const result = fuse.search(searchQuery);

				const dataConvert = [];
				result.forEach(element => {
					dataConvert.push(element.item);
				});

				resolve(dataConvert);
			}
		});
	});
};

module.exports = provinsi;
