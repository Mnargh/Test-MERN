import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
global.fetch = require('jest-fetch-mock');
<<<<<<< HEAD
=======

>>>>>>> 1f061dc9545f549429adea55814128eebbf2fd99
configure({ adapter: new Adapter() });
