const express = require('express')
const path = require('path')
const router = express.Router()
const blogs = require('../data/blogs')
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../temp/index.html'))
})

router.get('/blogs', (req,res)=>{
    // blogs.forEach(element => {
    //     console.log(element.title)
    // });printting each element

    res.sendFile(path.join(__dirname,'../temp/blog.html'))//the second html file repository
})
router.get('/blogpost/:slug', (req,res)=>{
    myblog=blogs.filter((e)=>{
        return e.slug=req.params.slug
    })
    console.log(myblog)
    res.sendFile(path.join(__dirname,'../temp/blogpost.html'))
})

module.exports=router