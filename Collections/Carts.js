import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Carts = new Mongo.Collection('carts');

Carts.attachSchema(new SimpleSchema({
  username: {
		type: String,
		label: "Username",
	},

  seller: {
		type: String,
		label: "Seller",
	},

  title: {
		type: String,
		label: "Title",
	},

	qty: {
		type: Number,
		label: "Quantity",
	},

}));

Carts.allow ({
	insert: function() {
        return true;
	},
});