const express = require('express');
const router = express.Router();
const execFile = require('child_process').execFile;
const program = "/home/jacobhiance/Projects/cortex/C/build/Release/roots";

// GET roots page
router.get('/', (req, res, next) => {
    if(req.query.a && req.query.b && req.query.c) {
        let coefs = [
            parseInt(req.query.a),
            parseInt(req.query.b),
            parseInt(req.query.c)
        ];
        var child_roots = execFile(program, coefs, (error, stdout, stderr) => {
            let roots = stdout.split("\n").slice(0, 2).map(root => {
                return parseFloat(root);
            });
            res.render('rootsview', {
                title: "Calculate roots to quadratic equations",
                root1: roots[0],
                root2: roots[1]
            });
        });
    } else {
        res.render('rootsview', {
            title: "Calculate roots to quadratic equations",
            root1: undefined,
            root2: undefined,
        });
    }
});

module.exports = router;
