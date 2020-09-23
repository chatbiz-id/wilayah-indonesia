# Apa Ini?

Pencarian wilayah di Indonesia berdasarkan Provinsi, Kota/Kabupaten, Kecamatan dan Kelurahan/Desa.

# Install

`npm i wilayah-indonesia --save`

```
const wilayah = require('wilayah-indonesia');

const kecamatan = wilayah('malad', 'kecamatan');

kecamatan.then(val => {
	console.log('Data kecamatan: ', val);
});
```

## Opsi

chatbiz-id/wilayah-indonesia menyediakan 2 parameter default :

-   _query_ - _string_
-   _tipe_ - _provinsi | kota | kecamatan | kelurahan_ (Default kelurahan)

```js
wilayah(query, tipe);
```

Contoh:

```js
wilayah('sulawesi', 'provinsi');
```

selain 2 parameter default tersebut, chatbiz-id/wilayah-indonesia menyediakan parameter tambahahan untuk tipe [kota | kecamatan | kelurahan] yaitu:

-   _di_dalam_region_ - _object_

yang berfungsi sebagai query tambahan dalam melakukan pencarian wilayah

```js
wilayah(query, tipe, di_dalam_region);
```

Contoh untuk tipe Kota:

```js
wilayah('AC', 'kota', {
	provinsi: 'aceh',
});
```

Contoh untuk tipe Kecamatan:

```js
wilayah('malad', 'kecamatan', {
	provinsi: 'papua',
});
```

```js
wilayah('malad', 'kecamatan', {
	kota: 'sorong',
});
```

```js
wilayah('malad', 'kecamatan', {
	provinsi: 'papua',
	kota: 'sorong',
});
```

Contoh untuk tipe Kelurahan:

```js
wilayah('malamas', 'kelurahan', {
	provinsi: 'papua',
});
```

```js
wilayah('malamas', 'kelurahan', {
	kota: 'sorong',
});
```

```js
wilayah('malamas', 'kelurahan', {
	kecamatan: 'segun',
});
```

```js
wilayah('malamas', 'kelurahan', {
	provinsi: 'papua',
	kota: 'sorong',
	kecamatan: 'segun',
});
```

## Referensi

-   Kode dan Data Wilayah Administrasi Pemerintahah Indonesia https://github.com/cahyadsn/wilayah
-   Kode dan Data Wilayah Administrasi Pemerintahan (Permendagri No.56-2015) www.kemendagri.go.id/pages/data-wilayah
-   Kode dan Data Wilayah Administrasi Pemerintahan (Permendagri No.137-2017) http://www.kemendagri.go.id/produk-hukum/2018/01/18/kode-dan-data-wilayah-administrasi-pemerintahan-tahun-2017
-   Kode dan Data Wilayah Administrasi Pemerintahan (Permendagri No.72-2019) https://www.kemendagri.go.id/page/read/48/peraturan-menteri-dalam-negeri-no72-tahun-2019
