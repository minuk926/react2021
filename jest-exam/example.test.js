//
// test('adds 1 + 2 to equal 3', ()=>{
// 	expect(1 + 2).toBe(3);
// })

describe("expect to~ test", ()=>{
	it('adds 1 + 2 to equal 3', ()=>{
		expect(1 + 2).toBe(3);
	});
	it('37 to equal 37', ()=>{
		expect(37).toBe(37);
	});
	it('{age: 39} to equal {age: 39}', ()=>{
		expect({age: 39}).toEqual({age: 39});
	});
	it('.toHaveLength', ()=>{
		expect('hello').toHaveLength(5);
	});
	it('.toHaveProperty', ()=>{
		expect({name: 'Mark'}).toHaveProperty('name');
		expect({name: 'Mark'}).toHaveProperty('name', 'Mark');
	});
	it('.toBeDefined', ()=>{
		expect({name: 'Mark'}.name).toBeDefined();
	});
	it('.toBeUndefined', ()=>{
		expect({name: 'Mark'}.age).toBeUndefined();
	});
	it('.toBeFalsy', ()=>{
		expect(false).toBeFalsy();
		expect(0).toBeFalsy();
		expect(null).toBeFalsy();
		expect(undefined).toBeFalsy();
		expect('').toBeFalsy();
		expect(NaN).toBeFalsy();
	});
	it('.toBeTruthy', ()=>{
		expect(true).toBeTruthy();
		expect(1).toBeTruthy();
		expect({}).toBeTruthy();
		expect([]).toBeTruthy();
	});
	it('.toBeNaN', ()=>{
		expect(NaN).toBeNaN();
	});
	it('.toBeGreaterThan', ()=>{
		expect(10).toBeGreaterThan(9);
	});
	it('.toBeGreaterThanOrEqual', ()=>{
		expect(10).toBeGreaterThanOrEqual(10);
	});
	it('.toBeInstanceOf', ()=>{
		class Foo {}
		expect(new Foo()).toBeInstanceOf(Foo);
	});
});

describe("expect .not.to~ test", ()=>{
	it('.not.toBeGreaterThan', ()=>{
		expect(10).not.toBeGreaterThan(20);
	});
});

describe("***** use async test *****", ()=>{
	it('async-await resolve', async ()=>{
		function p(){
			return new Promise(resolve => {
				setTimeout(()=>{
					resolve(37);
				}, 1000);
			});
		}
		const data = await p();
		return expect(data).toBe(37);
	});
	it('async-await catch', async ()=>{
		function p(){
			return new Promise((resolve, reject) => {
				setTimeout(()=>{
					reject(new Error('error'));
				}, 1000);
			});
		}

		try{
			await p();
		}catch(error){
			expect(error).toBeInstanceOf(Error);
		}
	});
});

describe("use async test1", ()=>{
	it('promise then', ()=>{
		function p(){
			return new Promise(r => {
				setTimeout(()=>{
					r(37);
				}, 1000);
			});
		}
		return p().then(data => expect(data).toBe(37));
	});
	it('promise catch', ()=>{
		function p(){
			return new Promise((r, e) => {
				setTimeout(()=>{
					e(new Error('error'));
				}, 1000);
			});
		}
		return p().catch(e => expect(e).toBeInstanceOf(Error));
	});
});

describe("use async test2", ()=>{
	it('promise .resolve', ()=>{
		function p(){
			return new Promise(resolve => {
				setTimeout(()=>{
					resolve(37);
				}, 1000);
			});
		}
		return expect(p()).resolves.toBe(37);
	});
	it('promise .reject', ()=>{
		function p(){
			return new Promise((resolve, reject) => {
				setTimeout(()=>{
					reject(new Error('error'));
				}, 1000);
			});
		}
		return expect(p()).rejects.toBeInstanceOf(Error);
	});
});


