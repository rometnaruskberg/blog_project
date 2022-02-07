import axios from "axios";

const endpoint = 'http://localhost:3000/comments/';

describe('post new comment',()=>{

    it('new comment posted succesfully', async () => {
        const testData = {
                authorId: 'e7d1555b-f45a-4458-a94e-cab88e0d52aa',
                postId: '867c46b4-ce11-4009-b9c6-2f2b9f9e374f',
                title: 'Automated comment post',
                content: 'This is automated test comment.'  
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;
        expect(responseData.authorId).toEqual(testData.authorId);
        expect(responseData.postId).toEqual(testData.postId);
        expect(responseData.title).toEqual(testData.title);
        expect(responseData.content).toEqual(testData.content);
        return;
    });

});