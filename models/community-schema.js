'use strict';

const mongoose = require('./model'),
    Schema = mongoose.Schema,
    CommunitySchema = new Schema({
        _id : Schema.Types.ObjectId,
        name : String,
        type: String,
        description: String
    },
    {
         collection: 'community'
    }),
    Community = mongoose.model('Community', CommunitySchema);

module.exports = Community;