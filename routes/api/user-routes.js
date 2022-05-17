const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {});

// GET /api/users/1
router.get('/:id', (req, res) => {});

// POST /api/users
router.post('/', (req, res) => {});

router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      res.json({ user: dbUserData });
  
      // Verify user
  
    });  
  });

// PUT /api/users/1
router.put('/:id', (req, res) => {
      // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;