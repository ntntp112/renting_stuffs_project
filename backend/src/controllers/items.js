// place the wishlists logic here
const Item = require('../models/item');

exports.getAllItems = (req, res, next) => {
    // we use promise which is nicer than callback
    Item.findAll()
        .then(([rows, fields]) => {
            res.status(200).json({
                items: rows
            })
        }).catch(err => {
            console.log(err);
        });
};

exports.getItemDetail = (req, res, next) => {
    Item.findByItemId(req.params.item_id)
        .then(([rows, fields]) => {
            res.status(200).json({
                item: rows
            })
        }).catch(err => {
            console.log(err);
        });
};