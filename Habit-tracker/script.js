const tracker = document.querySelector('#tracker');
const library = new NLWSetup(tracker);
const data = {
    run: ['01-15', '01-16', '01-17']
}

library.setData(data);
library.load();