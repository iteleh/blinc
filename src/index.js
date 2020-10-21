import 'bootstrap';
import './css/app.scss';
import { services } from './modules/services';
import { about } from './modules/about';

const serviceSection = document.getElementById('services');
const aboutSection = document.getElementById('about');
serviceSection.innerHTML = services;
aboutSection.innerHTML = about;