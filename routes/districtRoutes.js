const express = require('express');
const router = express.Router();
const districtController = require('../controllers/districtController');

router.post('/', districtController.createDistrict);
router.get('/', districtController.getDistricts);
router.get('/:id', districtController.getDistrictById);
router.put('/:id', districtController.updateDistrict);
router.delete('/:id', districtController.deleteDistrict);

module.exports = router;
