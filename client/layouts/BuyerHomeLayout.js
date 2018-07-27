import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Products } from '../../Collections/Products.js';
import { Carts } from '../../Collections/Carts.js';

import './BuyerHomeLayout.html';
import './BuyerMainLayout.html';

Template.BuyerHomeLayout.onCreated(function () {
  Meteor.subscribe('products');
  Meteor.subscribe('carts');
});


Template.HomeDisplay.helpers({
	'products': function() {
		return Products.find();
	}
});
