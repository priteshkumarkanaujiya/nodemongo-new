const express = require('express');
const router = express.Router();
const auditService = require('./audit.service');

// routes

router.get('/details', audit);


module.exports = router;

function audit(req, res, next) {
    auditService.checkRole(req.query.user).then(user => {
        if (user.role == "Auditor") {
            auditService.getAllAudits(req.body).then(audit => audit ? res.json(audit) : res.status(400).json({ message: 'no audit details found' }))
                .catch(err => next(err));
        } else {
            res.status(401).send();
        }
    })


}



