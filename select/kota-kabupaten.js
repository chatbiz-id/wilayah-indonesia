const fs = require('fs');
const path = require('path');
const Fuse = require('fuse.js');

const provinsi = (searchQuery, inRegion) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, '../data/kota.json'), (err, data) => {
			if (err) {
				reject(err);
			}

			const dataJSON = JSON.parse(data);

			const options = {
				threshold: 0.2,
				keys: ['kota']
			};

			if (inRegion && inRegion.provinsi) {
				const fuseProvinsi = new Fuse(dataJSON, {
					threshold: 0.2,
					keys: ['provinsi']
				});
				const resultProvinsi = fuseProvinsi.search(inRegion.provinsi);

				const dataConvertProvinsi = [];
				resultProvinsi.forEach(element => {
					dataConvertProvinsi.push(element.item);
				});

				const fuseKota = new Fuse(dataConvertProvinsi, {
					threshold: 0.2,
					keys: ['kota']
				});

				const resultKota = fuseKota.search(searchQuery);

				const dataConvertKota = [];
				resultKota.forEach(element => {
					dataConvertKota.push(element.item);
				});

				resolve(dataConvertKota);
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
