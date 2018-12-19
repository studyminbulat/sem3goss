const Zombie = require('zombie');
const page = new Zombie();
const cases = [
    {s: 'abc', xs: 'CBA'},
    {s: '123', xs: '321'},
];

const URL = 'https://kodaktor.ru/g/autocase';
cases.forEach(async ({ s, xs }) => {
   await page.visit(URL);
   page.fill('#inp', s);
   page.pressButton('#button_do');
   console.log(page.document.querySelector('#ans').value, xs);
});