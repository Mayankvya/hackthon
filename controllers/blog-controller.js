import Blog from "../model/Blog";

export const getALLBlogs = async (req, res,nest) => {
    let blogs;
    try {
        blogs =await Blog.find();
    }catch (err){
        return console.log(err)
    }
    if(!blogs){
        return res.status(404).json({message:"No blogs found"})
    }
    return res.status(200).json({blogs})
};

export const addBblog =async (req, res,next) => {
    const {title, description, imange, user}= req.body;
    const blog = new Blog({
        title,
        description,
        imange,
        user,
    });
    try {
        await blog.save();
    } catch (err) {
        return console.log(err);
    }
    return res.status(200).json({blog});
};

    

export const updateBlog = async (req, res,next) => {
 const { title,description} =req.body;
 const blogId =req.params.id;
 let blog;
 try {
    blog = await Blog.findByIdAndUpdate(blogId,{
        title,
        description
    })
} catch (err) {
    return console.log(err)
}
if (!blog) {
    return res.status(500).json({message:"unable to Update The blog"})
}
return res.status(200).json({blog});
};

export const getById = async (req, res,next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndDelete(id);

    } catch (err) {
        return console.log(err)
    }
    if (!blog) {
        return res.status(500).json({message:"unable to Delete The blog"})
    }
    return res.status(200).json({blog});
}
export const deleteBlog = async (req, res,next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndDelete(id);
    
   
    } catch (err) {
        return console.log(err)
    }
    if (!blog) {
        return res.status(400).json({message:"unable to Delete The blog"})
    }
    return res.status(200).json({blog});
}