let mutantPowers = document.querySelectorAll('.mutant-power');

const minInt = 999;
const maxInt = 9999;
for (let i = 0; i < mutantPowers.length; i++)
{
    let power = Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
    mutantPowers[i].innerHTML = "power is: " + power;
} // 20 - 1 = 19 + 1 then shifts the entire range to start from minInt.