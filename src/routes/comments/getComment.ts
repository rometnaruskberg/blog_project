import express from "express";
import Comment from "../../entities/Comment";
const router = express.Router();

router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;

        const comment = await Comment.findOne({id: id});

        if(!comment){
            return res.json({
                message: 'no comment with given ID'
            })
        }
        return res.json(comment);
    }   catch(error){
        if (error instanceof Error){
            return res.json({
                error: 'VIGA getComment.ts',
                message: error.message
            });
        }

    }
    
});
export default router;