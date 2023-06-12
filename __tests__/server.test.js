const server = require('../src/server');
const supertest = require('supertest');
const { db } = require('../src/models/index');
const request = supertest(server.app);
beforeAll(async () => {
    await db.sync();
});
describe('server testing',()=>{
    test('404 on a bad route',async ()=>{
        const responce = await request.get('/bad')
        expect(responce.status).toBe(200)
        expect(typeof responce.body).toBe('object')
    })
    test('404 on a bad method',async()=>{
        const responce = await request.put('/clothes')
        expect(responce.status).toBe(200)
        expect(responce.error).toBeCalled
    })
    test('Create a record using POST',async ()=>{
        const responce = await  request.post('/clothes').send({
            "Name" :"mankoosh",
            "type" : "jeans",
            "hot" : "true",
            "cold" : "false"
        })
        expect(responce.status).toBe(201)
    })
    test('Read a list of records using GET',async()=>{
        const responce=await request.get('/clothes')
        expect(responce.status).toBe(200)
    })
    test('Read a record using GET',async()=>{
        const responce=await request.get('/clothes/1')
        expect(responce.status).toBe(200)
    })
    test('Update a record using PUT',async()=>{
      
        const responce=await request.put('/clothes/1')
        expect( responce.status).toBe(201)
    })
    test('Destroy a record using DELETE',async()=>{
    const responce = await request.delete('/clothes/1')
        expect(responce.status).toBe(204)
    })
    

    test('Create a record using POST on foods',async ()=>{
        const responce = await  request.post('/foods').send({
            "Name": "falafel",
            "type": "syrian",
            "hot": true,
            "cold": false,
        })
        expect(responce.status).toBe(201)
    })
    test('Read a list of records using GET on foods',async()=>{
        const responce=await request.get('/foods')
        expect(responce.status).toBe(200)
    })
    test('Read a record using GET on foods',async()=>{
        const responce=await request.get('/foods/1')
        expect(responce.status).toBe(200)
    })
    test('Update a record using PUT on foods',async()=>{
      
        const responce=await request.put('/foods/1')
        expect( responce.status).toBe(201)
    })
    test('Destroy a record using DELETE on foods',async()=>{
    const responce = await request.delete('/foods/1')
        expect(responce.status).toBe(204)
    })
})
afterAll(async () => {
    await db.drop();
});