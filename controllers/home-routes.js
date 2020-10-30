const { Post } = require('../models');

const router = require('express').Router();

router.get('/', (req,res)=>{
  Post.findAll({
      attributes: [
          'id',
          'title',
          'created_at'
      ],
      include: {
          model: Comment,
          attributes: 
      }
  })

});