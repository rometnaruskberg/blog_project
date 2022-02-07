import express from "express";
import Comment from "../../entities/Comment";
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const {postId, skip, take} = req.query;


// TEINE VARIANT QUERY BUILDER
        // console.log(...posts)
        const postsQuery = Comment.createQueryBuilder('post')
            .innerJoinAndSelect('post.author', 'author')
            .limit(Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20)
            .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0);

        if(postId != undefined) {
            postsQuery.where('id = :postId', {postId: postId});
        }

        const comments = await postsQuery.getMany();

        return res.json({comments: comments});
    
    }   catch(error){
        if (error instanceof Error) {
            return res.json({
                error: 'VIGA getComments.ts',
                message: error.message
            });
        }
        
    }
    
});

export default router;