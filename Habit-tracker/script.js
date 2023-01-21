const tracker = document.querySelector('#tracker');
const nlwSetup = new NLWSetup(tracker);
const button = document.querySelector("header button");

button.addEventListener('click', register);
tracker.addEventListener('change', save);

function register(){
    const day = new Date().toLocaleDateString('en').slice(0, -5);
    const dayExists = nlwSetup.dayExists(day);
    if (dayExists){
        alert('This date already exists');
        return;
    }
    alert('Day added');
    nlwSetup.addDay(day);
}

function save(){
    localStorage.setItem('HabitTracker', JSON.stringify(nlwSetup.data));
    console.log(nlwSetup.data);
}

const data = JSON.parse(localStorage.getItem('HabitTracker')) || {};
nlwSetup.setData(data);
nlwSetup.load();