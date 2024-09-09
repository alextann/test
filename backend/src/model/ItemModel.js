const mongoose = require ('mongoose');
const {Schema} = mongoose;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
})

const commentSchema = new Schema ({
    user: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    }
})

const  moreSchema = new Schema({
    prep_time:{type: String,require: true},
    cook_time:{type: String,require: true},
    servings:{type: String,require: true},
    difficulty:{type: String,require: true},
    soure:{type: String,require: true},

})


const ItemSchema = new Schema({
    menuId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require : true
    },
    thumbnail_image: {
        type: String,
        require: true
    },
    instructions: {
        type: String,
        require: true
    },
    tags: [String],
    ingredients : {
        type: [ingredientSchema],
        require: true
    },

    comments: {
        type: [commentSchema],
        require: true
    },
    more:{
        type: String,
        require: true
    }
})

const Item = mongoose.model('Item',ItemSchema);

module.exports = Item