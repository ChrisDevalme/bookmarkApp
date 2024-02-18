const { model, Schema } = require('mongoose')


const bookmarkSchema = new Schema ({
    title: String ,
    url: String 
}, {
    timestamps: true
})

const Bookmark = model('Bookmark', bookmarkSchema)

module.exports = Bookmark