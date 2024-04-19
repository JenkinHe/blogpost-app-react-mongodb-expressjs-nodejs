

const express=require('express');
const blogRouter=express.Router();

const {fetchListofBlogs,addNewBlog,updateABlog,deleteABlog} =require('../controller//blog-controller');

blogRouter.get('/',fetchListofBlogs);
blogRouter.post('/add',addNewBlog);
blogRouter.put('/update/:id',updateABlog);
blogRouter.delete('/delete/:id',deleteABlog);

module.exports=blogRouter;