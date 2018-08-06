import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Carts = new Mongo.Collection('carts');

Carts.attachSchema(new SimpleSchema({
  username: {
		type: String,
		label: "Username",
		optional: false,
	},

  seller: {
		type: String,
		label: "Seller",
		optional: false,
	},

  title: {
		type: String,
		label: "Title",
		optional: false,
	},

	qty: {
		type: Number,
		label: "Quantity",
		min: 1,
		optional: false,
	},

}));

Carts.allow ({
	insert: function() {
        return true;
	},
});