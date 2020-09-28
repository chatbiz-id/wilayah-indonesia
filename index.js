const select = require('./select');

module.exports = (query, type, inRegion) => {
	switch (type) {
		case 'provinsi':
			return select.provinsi(query);
		case 'kota':
			return select.kota(query, inRegion);
		case 'kecamatan':
			return select.kecamatan(query, inRegion);
		case 'kelurahan':
			return select.kelurahan(query, inRegion);

		default:
			return select.kelurahan(query, inRegion);
	}
};
