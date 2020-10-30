const router = require('express').Router();
const {Post, User, Comment} = require('../../models');

//get all, get one, create, update, delete

router.get('/', (req,res)=>{
    Post.findAll({
        attributes: ['id', 'title', 'text', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData=> {
        res.json(dbPostData);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req,res)=>{
    Post.findOne({
        attributes: ['id', 'title', 'text', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at']
            },
            {
                model: User,
                attributes: ['username']
            }
        ],
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData=>{
        if(!dbPostData) {
            res.status(404).json({message: 'No post found with that id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req,res)=>{
    //expects {title: xxxxx, text: xxxxx, user_id: ##}
    Post.create({
        title: req.body.title,
        text: req.body.text,
        user_id: req.body.user_id
    })
    .then(dbPostData=> {
        res.json(dbPostData);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

//allow user to edit both title and text
router.put('/:id', (req,res)=>{
    Post.update(
    {
        title: req.body.title,
        text: req.body.text
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData=>{
        if(!dbPostData){
            res.status(404).json({message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req,res)=>{
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData=>{
        if(!dbPostData) {
            res.status(404).json({message: 'No post found with that id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;