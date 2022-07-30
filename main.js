const today = new Date();

const myEvents = document.querySelector('#myEvents')
const who = document.querySelector('#who');
const what = document.querySelector('#what');
const when = document.querySelector('#when');
const where = document.querySelector('#where');
const why = document.querySelector('#why'); 
const occasion = document.querySelector('.event');
const monEventList = document.querySelector('#monthlyEvents');

myEvents.addEventListener('submit', addSpecialEvent);

function addSpecialEvent(e) {
    e.preventDefault();

    if(who.value=== '' || what.value === '' || when.value === '' || where.value === '' || why.value === '') {
        occasion.classList.add('error');
        occasion.innerHTML = 'Please Fill All Fields';
    
        setTimeout(() => occasion.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${who.value} : ${what.value} : ${when.value} : ${where.value} : ${why.value}`));

        monEventList.appendChild(li);

        who.value = '';
        what.value = '';
        when.value = '';
        where.value = '';
        why.value = '';
    }
}

function getTodaysDate() {
    document.getElementById('dateDemo').innerHTML = today;

    todaysNum = today.getDate();

    console.log(todaysNum);
}

// getTodaysDate()