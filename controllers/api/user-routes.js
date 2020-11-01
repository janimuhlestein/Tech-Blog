const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

//routes for getting, creating, deleting, and updating users, and allow user to login

router.get('/', (req,res)=>{
    User.findAll({
        attributes: {exclude: ['password']}
    })
    .then(dbUserData=>{
        res.json(dbUserData);
    })
    .catch(errr=>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req,res)=>{
    User.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'text', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }
        ]
    })
    .then(dbUserData=>{
        if(!dbUserData) {
            res.status(404).json({message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req,res)=>{
    //expects: {username: xxxx, first_name: xxxx, last_name: xxxx, email: xxxx@xxx.com, password: xxxxxx}
    User.create({
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
    .then(dbUserData=>{
        req.session.save(()=>{
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json(dbUserData);
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req,res)=>{
    //expects {username: xxxxx, password: xxxxx}
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(dbUserData=>{
        if(!dbUserData) {
            res.status(400).json({message: 'No user with that username found'});
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);
        if(!validPassword) {
            res.status(400).json({message: 'Incorrect password!'});
            return;
        }
         req.session.save(()=>{
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            console.log(req.session.loggedIn);
            res.json({user: dbUserData, message: 'You are now logged in.'});
        }); 
       // res.json({user: dbUserData, message: 'You are now logged in.'});
        //res.json({user: dbUserData})
    });
});

router.post('/logout', (req,res)=>{
    if(req.session.loggedIn) {
        req.session.destroy(()=> {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }

});

router.put('/:id', (req,res)=>{
    //expects the same as creation
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData=>{
        if(!dbUserData[0]){
            res.status(404).json({message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req,res)=>{
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData=>{
        if(!dbUserData) {
            res.status(404).json({message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;