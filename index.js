const select = require('./select');

module.exports = function(query, type, in_region) {
	switch (type) {
		case 'provinsi':
			return select.provinsi(query);
		case 'kota':
			return select.kota(query, in_region);
		case 'kecamatan':
			return select.kecamatan(query, in_region);
		case 'kelurahan':
			return select.kelurahan(query, in_region);

		default:
			return select.kelurahan(query, in_region);
	}
};
