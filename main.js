const who = document.querySelector('#who');
const what = document.querySelector('#what');
const when = document.querySelector('#when');
const where = document.querySelector('#where');
const why = document.querySelector('#why'); 
const event = document.querySelector('.event');
const monEventList = document.querySelector('#monEvents')

events.addEventlistener('submit', addSpecialEvent)

function addSpecialEvent(sub) {
    sub.preventDefault();

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${who.value} : ${what.value} : ${when.value} : ${where.value} : ${why.value}`));

    monEventList.appendChild(li);

    who.value = '';
    what.value = '';
    when.value = '';
    where.value = '';
    why.value = '';
}