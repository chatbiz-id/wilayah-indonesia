const fs = require('fs');
const path = require('path');
const Fuse = require('fuse.js');

const provinsi = searchQuery => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, '../data/provinsi.json'), (err, data) => {
			if (err) {
				reject(err);
			}

			const dataJSON = JSON.parse(data);
			const options = {
				threshold: 0.2,
				keys: ['provinsi']
			};

			const fuse = new Fuse(dataJSON, options);

			const result = fuse.search(searchQuery);
			const dataConvert = [];
			result.forEach(element => {
				dataConvert.push(element.item);
			});
			resolve(dataConvert);
		});
	});
};

module.exports = provinsi;
