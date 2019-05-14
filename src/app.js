import {person, hello} from './index';

alert(person.name);

const x = hello();
console.log(x);

async function posto() {

    const pergjigje = await fetch('https://jsonplaceholder.typicode.com/posts');
    const e_dhene = await pergjigje.json();
    return e_dhene;
}

posto().then(posts => console.log(posts));