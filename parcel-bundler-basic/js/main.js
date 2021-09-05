console.log('Hello Parcel!');

(async function test(){
	const p = Promise.resolve(123);
	console.log(await p);
})();