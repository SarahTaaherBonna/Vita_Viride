import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Products } from '../Collections/Products.js';
import { Carts } from '../Collections/Carts.js';

import '../client/layouts/BuyerHomeLayout.html';
import '../client/layouts/BuyerMainLayout.html';
import './buyervegansnacks.html';

Template.BuyerHomeLayout.onCreated(function () {
  Meteor.subscribe('products');
  Meteor.subscribe('carts');
});


Template.buyervegansnacks.helpers({
	'Veganproducts': function() {
		return Products.find({Veganapproved: "Yes"});
	}
});