const request = require('request');

const APIKey = 60579492;
const keyfrom = 'youdaomac';

var options = {
	url: 'http://fanyi.youdao.com/openapi.do?keyfrom=youdaomac&key=60579492&type=data&doctype=json&version=1.1&q=你好',
	method: 'get',
	headers: {Accept: 'application/json'}
}

var option = {
	/*host: 'fanyi.youdao.com',
	path: '/openapi.do',*/
	uri: 'http://fanyi.youdao.com/openapi.do',
	qs: {
		keyfrom: 'youdaomac',
		key: '60579492',
		doctype: 'json',
		version: '1.1',
		q: '你好'
	},
	method: 'get',
	headers: {Accept: 'application/json'}
}

request(option, function function_name(err, response) {
	//console.log(err);
	console.log(response);
})

/*request('http://www.baidu.com', function function_name(err, response) {
	console.log(err);
	console.log(response);
})*/