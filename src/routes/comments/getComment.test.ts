import  express from 'express';
import Comment from '../../entities/Comment';
import {v4 as uuidv4} from 'uuid';
import User from '../../entities/User';
import Post from '../../entities/Post';
const router = express.Router();

interface PostInput {
    authorId: string;
    postId: string;
    title: string;
    content: string;
}

router.post('/', async (req, res) => {
    try{

        const {authorId, postId, title, content} = req.body as PostInput;
    
        const user = await User.findOne({id: authorId});
        const post = await Post.findOne({id: postId});
        if(!user) {
            return res.json({message: 'No user found. Can not post comment.'});
        };
        if(!post) {
            return res.json({message: 'No post found. Can not post comment.'});
        }
    
        const comment = Comment.create({
            id: uuidv4(),
            authorId: user.id,
            postId: post.id,
            title: title,
            content: content,
            published: false
        });
        
    
        const newComment = await comment.save();
        if(!newComment) {

            console.log({error: 'Can not post comment (createComment.ts).'});

            return res.json({
                error: 'Unable to create new comment (createComment.ts)',
                message: 'typeorm save'
            });
        }   

        return res.json(newComment);
    }   catch(error){
        console.log('Unknow database error createPost.ts');
        if(error instanceof Error) {
            return res.json({
                error: 'VIGA! (createComment.ts)',
                message: error.message
            });
        }
    }
});


export default router;