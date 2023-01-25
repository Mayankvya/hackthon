import express from 'express';
import { addBblog, deleteBlog, getALLBlogs, getById, updateBlog } from '../controllers/blog-controller';
const blogRouter = express.Router();

blogRouter.get('/', getALLBlogs);
blogRouter.post('/',addBblog);
blogRouter.put('/update/:id',updateBlog);
blogRouter.get("/:id",getById)
blogRouter.delete("/:id",deleteBlog);
export default blogRouter;