'use strict';

const CommunityController = require('../controllers/community-controller'),
    express = require('express'),
    router = express.Router(),
    cc = new CommunityController();

router
    .get('/api/communities', cc.getAll)
    .get('/api/communities/add', cc.addForm)
    .get('/api/communities/edit/:_id', cc.getOne)
    .post('/api/communities', cc.save)   
    .put('/api/communities/update/:_id', cc.save)
    .delete('/api/communities/delete/:_id', cc.delete)
    .use(cc.error404);

module.exports = router;