import 'bootstrap';
import './css/app.scss';
import { services } from './modules/services';
import { about } from './modules/about';
import { features } from './modules/features';
import { footer } from './modules/footer';

const serviceSection = document.getElementById('services');
const aboutSection = document.getElementById('about');
const featureSection = document.getElementById('features');
const footerSection = document.querySelector('.footer');
serviceSection.innerHTML = services;
aboutSection.innerHTML = about;
featureSection.innerHTML = features;
footerSection.innerHTML = footer;