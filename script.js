import { header, initializeHeader } from './components/header.js';
import { drawer, openNav, closeNav } from './components/drawer.js';


document.body.insertAdjacentHTML("afterbegin", header()); // Adds header at the top
initializeHeader();

document.body.insertAdjacentHTML("afterbegin", drawer()); // Adds header at the top


console.log("Script is running!");
