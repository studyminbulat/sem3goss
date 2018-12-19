require('should');
const { get } = require('axios');
const a = 5, b = 3;
const data = [
    {a: 1, b: 2, sum: 3},
    {a: -1, b: -2, sum: -3},
    {a: -1, b: 2, sum: 1},
    {a: 1, b: -2, sum: -1},
    {a: 10, b: 20, sum: 30},
    {a: -10, b: -20, sum: -30},
    {a: 100, b: 200, sum: 300},
    {a: -100, b: -200, sum: -300},
    {a: 1000, b: 2000, sum: 3000},
    {a: -1000, b: -2000, sum: -3000},
    {a: 0.1, b: 0.2, sum: 0.3},
];

const headers = {'Content-Type': 'application/json'};

describe('asyncAdd', () => {
    data.forEach((item) => {
        const URL = `https://kodaktor.ru/api/add/${item.a}/${item.b}`;
        console.log(URL);
        it(`should return the sum of ${item.a}, ${item.b}`, async () => {
            const {data: {"Сумма": s}} = await get(URL, {headers});
            s.should.equal(item.sum);
        });
    })
});


// mkdir test