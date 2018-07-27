import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Products } from '../Collections/Products.js';
import { Carts } from '../Collections/Carts.js';

import '../client/layouts/BuyerHomeLayout.html';
import '../client/layouts/BuyerMainLayout.html';
import './buyervegetariansnacks.html';

Template.BuyerHomeLayout.onCreated(function () {
  Meteor.subscribe('products');
  Meteor.subscribe('carts');
});


Template.buyervegetariansnacks.helpers({
	'Vegetarianproducts': function() {
		return Products.find({Vegetarianapproved: "Yes"});
	}
});