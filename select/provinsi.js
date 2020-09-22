const fs = require('fs');
const Fuse = require('fuse.js');

const provinsi = function(searchQuery) {
	return new Promise(function(resolve, reject) {
		fs.readFile('data/provinsi.json', (err, data) => {
			if (err) reject(err);
			let dataJSON = JSON.parse(data);
			const options = {
				threshold: 0.2,
				keys: ['provinsi'],
			};

			const fuse = new Fuse(dataJSON, options);

			const result = fuse.search(searchQuery);
			const dataConvert = [];
			result.forEach(el => {
				dataConvert.push(el.item);
			});
			resolve(dataConvert);
		});
	});
};

module.exports = provinsi;
