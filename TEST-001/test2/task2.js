require('should');
const { get } = require('axios');
const a = 5, b = 3;
const data = [-5, -4, -3, -2, -1, 0, 0.5, 1, 2, 3, 4, 5];

const headers = {'Content-Type': 'application/json'};

describe('asyncAdd', () => {
    data.forEach((item) => {
        it(`should return the sum of ${item}`, async () => {
        	const URL1 = `https://kodaktor.ru/api2/there/${item}`;
            const {data: s1} = await get(URL1, {headers});
            const y = 36*(item**2) + 48* item +15;
            s1.should.equal(y);
            const URL2 = `https://kodaktor.ru/api2/andba/${s1}`;
            const {data: s2} = await get(URL2, {headers});
            console.log(s2);
            s2.should.equal(item);
        });
    })
});

// 1. Задание
// y = 36x^2+48x+15 - наша функция
// 2. Задание
// Есть связь для чисел больше 0 включая возвращает во второй функции тоже самое число,
// которое передавалось 1-й функции.
// для меньше 0 другая связь
// -5	675	3.6666
// -4	399	2.6666
// -3	195	1.6666
// -2	63	0.6666
// -1	3	-0.33333
// 0	15	0
// 1	99	1
// 2	255	2
// 3	483	3
// 4	783	4
// 5	1155	5


