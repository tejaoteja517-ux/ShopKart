const express = require('express');
const Address = require('../models/Address');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/addresses
router.get('/', auth, async (req, res) => {
  try {
    const addresses = await Address.findOne({ user: req.userId }).sort({ isDefault: -1 });
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST /api/addresses
router.post('/', auth, async (req, res) => {
  try {
    const {

    fullName,

    phone,

    house,

    street,

    area,

    city,

    state,

    zip,

    isDefault

} = req.body;
    if (

    !fullName ||

    !phone ||

    !house ||

    !street ||

    !area ||

    !city ||

    !state ||

    !zip

) {

    return res.status(400).json({
        message: "All address fields are required"
    });

}
    if (isDefault) {
      await Address.updateMany({ user: req.userId }, { isDefault: false });
    }
    const address = await Address.create({

    user: req.userId,

    fullName,

    phone,

    house,

    street,

    area,

    city,

    state,

    zip,

    isDefault: !!isDefault

});
    res.status(201).json(address);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// DELETE /api/addresses/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    const address = await Address.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!address) return res.status(404).json({ message: 'Address not found' });
    res.json({ message: 'Address deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
