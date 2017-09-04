'use strict';

const CommunityModel = require('../models/community-model'),
    cm = new CommunityModel();

class CommunityController {
    getAll(req, res, next) {
        cm.getAll((docs) => {
            res.render('index',  {
                title: 'Communities',
                data : docs
            });
        });
    }

    getOne(req, res, next) {
        let _id = req.params._id;
        cm.getOne(_id, (docs) => {
            res.render('edit', {
                title: 'Edit Community',
                data: docs
            });
        });
    }

    save(req, res, next) {
        let community = {
            _id: (req.body._id || null),
            name: req.body.name,
            type: req.body.type,
            description: req.body.description
        };

        cm.save(community, () => res.redirect('/api/communities/'));
    }

    delete(req, res, next) {
        let _id = req.params._id;
        cm.delete(_id, () => res.redirect('/api/communities/'));
    }

    addForm(req, res, next) {
        res.render('add',  {
            title: 'Add Community',
        });
    }

    error404(req, res, next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';
        res.render('error', {error: err});
    }
}

module.exports = CommunityController;