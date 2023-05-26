const url = require('url');

// new URL object
const current_url = new URL('http://usefulangle.com/preview?id=123&type=article');

// get access to URLSearchParams object
const search_params = current_url.searchParams;

// get url parameters
const id = search_params.get('id');
const type = search_params.get('type');

// "123"
console.log(id);

// "article"
console.log(type);
