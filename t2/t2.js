'use strict';

const piste1 = '2, 4'.split(',');
const piste2 = '5, 8'.split(',');

console.log(piste1, piste2);

const distance = Math.sqrt((piste2[0] - piste1[0]) ** 2 + (piste2[1] - piste1[1]) ** 2);

document.querySelector('#target').innerHTML = `Etäisyys on ${distance}`;
