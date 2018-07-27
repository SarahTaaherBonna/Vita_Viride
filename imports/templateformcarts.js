import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Carts } from '../Collections/Carts.js';

import './templateformcarts.html';

Template.templateformcarts.onCreated(function () {
  Meteor.subscribe('carts');
});