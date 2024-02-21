const { model, Schema } = require('mongoose')


const bookmarkSchema = new Schema ({
    title: String ,
    url: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

const Bookmark = model('Bookmark', bookmarkSchema)

module.exports = Bookmark