const {sequelize} = require('./db')
const {Musician, Dog} = require('./index')
describe('Muscian Database', () => {
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })

    test('can create a musician', async() => {
       await Musician.bulkCreate([{name: 'Prince', instrument: 'guitar'},{name: 'Lamin', instrument: 'Kora'},{name: 'Anuja', instrument: 'dhol'}])
       // await Musician.create({name: 'Prince', instrument: 'guitar'})
        // const musicians = await Musician.findAll();
        // console.log(musicians)
        // const testMusician = await Musician.findOne({
        //     where: {
        //       name: 'Prince'
        //     }
        //   });
      //  expect(testMusician.name).toBe('Prince')
       // expect(testMusician.instrument).toBe('guitar')
    
    })

    test('can create a musician', async() => {
        await Dog.bulkCreate([{name: 'DeepSea', Breed: 'husky'},{name: 'fly', Breed: 'Poodle'},{name: 'runner', Breed: 'Bulldog'}])
        // await Musician.create({name: 'Prince', instrument: 'guitar'})
         // const musicians = await Musician.findAll();
         // console.log(musicians)
         // const testMusician = await Musician.findOne({
         //     where: {
         //       name: 'Prince'
         //     }
         //   });
       //  expect(testMusician.name).toBe('Prince')
        // expect(testMusician.instrument).toBe('guitar')
     
     })

    //test(' musician has a name', ()=>)
})