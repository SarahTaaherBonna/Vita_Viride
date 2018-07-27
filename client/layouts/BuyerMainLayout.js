import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Products } from '../../Collections/Products.js';
import { Carts } from '../../Collections/Carts.js';

import './BuyerMainLayout.html';
import './BuyerHomeLayout.html';

Template.BuyerMainLayout.onCreated(function () {
  Meteor.subscribe('products');
  Meteor.subscribe('carts');
});
