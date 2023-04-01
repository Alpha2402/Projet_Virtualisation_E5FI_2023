const express = require('express');
const router = express.Router();
const Reminder = require('./reminder.model');

//synchroniser le modèle avec la base de données
const syncModel = async () => {
  try {
    await Reminder.sync();
  } catch (error) {
    console.error('Unable to synchronize the Reminder model:', error);
  }
};

// Appeler syncModel() pour synchroniser le modèle
syncModel();

router.get('/reminders', async (req, res) => {
  try {
    const reminders = await Reminder.findAll();
    res.json(reminders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching reminders.' });
  }
});

router.post('/reminders', async (req, res) => {
  try {
    const reminder = await Reminder.create(req.body);
    console.log('Reminder created:', reminder.toJSON());
    res.status(201).json(reminder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating a reminder.' });
  }
});

router.delete('/reminders/:id', async (req, res) => {
  try {
    const reminderId = req.params.id;
    await Reminder.destroy({ where: { id: reminderId } });
    res.status(204).json({ message: 'Reminder deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the reminder.' });
  }
});

module.exports = router;