const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookctrl')
const userCtrl = require('../../controllers/api/userCtrl')


// Index 
router.get('/', userCtrl.auth, bookmarkCtrl.index, bookmarkCtrl.jsonBookmarks)
// Delete
router.delete('/:id', userCtrl.auth, bookmarkCtrl.destroy, bookmarkCtrl.jsonBookmark)
// Update
router.put('/:id', userCtrl.auth, bookmarkCtrl.update, bookmarkCtrl.jsonBookmark)
// Create
router.post('/', userCtrl.auth, bookmarkCtrl.create, bookmarkCtrl.jsonBookmark)
// Show
router.get('/:id', userCtrl.auth, bookmarkCtrl.show, bookmarkCtrl.jsonBookmark)

module.exports = router