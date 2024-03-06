// Thought Routes 
const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../controllers/thought-controller');

// Route to get all thoughts and create a thought
router.route('/')
  .get(getThoughts)
  .post(createThought);

// Route to get, update, and delete a single thought by id
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// Route to add and remove reactions to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
