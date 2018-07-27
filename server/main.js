import { Meteor } from 'meteor/meteor';
import { Products } from '../Collections/Products.js';
import { Carts } from '../Collections/Carts.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('products', function() {
	return Products.find();
});

Meteor.publish('carts', function() {
	return Carts.find();
});


