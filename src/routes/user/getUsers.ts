import express, { Request, Response } from 'express';
import {getConnection} from 'typeorm';
import User from '../../entities/user';
const router = express.Router()

router.post('/:id', async (req: Request, res: Response)=>{
    try {
        const { id } = req.params;

        return res.send({ id: id });
    }   catch (error) {
        return res.send({ 
            error: 'Unable to create new user', 
            message: 'unknown error' 
        });
    }
});

export default router;