import axios from 'axios';

const endpoint = 'http://localhost:3000/users/posts/';

describe('get post by ID', () =>{
    it("should successfully create a new post", async() => {
        const testData = {
            authorId: '8db79f4f-47f9-4a19-88e7-1c009ed97198',
            title: 'my new post 3',
            content: 'mingi segane tekst asokdaskdas',
            
            summary: 'small summary for nonsense post 5'
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;

        expect(responseData.authorId).toEqual(testData.authorId);
        expect(responseData.title).toEqual(testData.title);
        expect(responseData.content).toEqual(testData.content);
        expect(responseData.summary).toEqual(testData.summary);

        return;
    });
});