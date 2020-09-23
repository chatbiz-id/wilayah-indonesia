const fs = require('fs');
const path = require('path');
const Fuse = require('fuse.js');

const provinsi = function(searchQuery, in_region) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path.join(__dirname, '../data/kota.json'), (err, data) => {
			if (err) reject(err);
			let dataJSON = JSON.parse(data);

			let options = {
				threshold: 0.2,
				keys: ['kota'],
			};

			if (in_region && in_region.provinsi) {
				const fuseProvinsi = new Fuse(dataJSON, {
					threshold: 0.2,
					keys: ['provinsi'],
				});
				const resultProvinsi = fuseProvinsi.search(in_region.provinsi);

				const dataConvertProvinsi = [];
				resultProvinsi.forEach(el => {
					dataConvertProvinsi.push(el.item);
				});

				const fuseKota = new Fuse(dataConvertProvinsi, {
					threshold: 0.2,
					keys: ['kota'],
				});

				const resultKota = fuseKota.search(searchQuery);

				const dataConvertKota = [];
				resultKota.forEach(el => {
					dataConvertKota.push(el.item);
				});

				resolve(dataConvertKota);
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
