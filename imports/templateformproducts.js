import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Products } from '../Collections/Products.js';

import './templateformproducts.html';

Template.templateformproducts.onCreated(function () {
  Meteor.subscribe('products');
});
