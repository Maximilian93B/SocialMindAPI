// User Routes 

const router = require ('express').Router();
const {
     getUsers, 
     getSingleUser, 
     createUser, 
     updateUser, 
     deleteUser, 
     addFriend, 
     removeFriend, 
} = require('../controllers/user-controller');


//User Route Definitions 
router.route('/')
.get(getUsers)
.post(createUser);

router.route('/:id')
.get(getSingleUser)
.put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router; 