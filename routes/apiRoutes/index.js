const router = require('express').router();
const notes = require('../apiRoutes/notes');

router.use(notes);

module.exporter = router;