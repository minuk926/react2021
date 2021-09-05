import '../css/main.css';

console.log('Hello webpack!');

(async function test(){
	const p = Promise.resolve(123);
	console.log(await p);
})();