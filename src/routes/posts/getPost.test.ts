import axios from 'axios';

const endpoint = 'http://localhost:3000/users/posts/';

describe('get post by ID', () =>{
    beforeAll(() => {
        //k'ivitame enne testi pakki
    });
    it("should return post by ID", async() => {
        const response = await axios.get(
            endpoint + '/8db79f4f-47f9-4a19-88e7-1c009ed97198'
        ); 
        expect(response.data).toHaveProperty('id');
        expect(response?.data?.title).toEqual('Title for a random post')
    });

    it('Should return error for non existing ID', async () => {
        const response = await axios.get(endpoint + '/nonExististentID');
        const data = response.data;
        console.log(data);
        expect(data).toHaveProperty('message');
        expect(data.message).toEqual('no post found with given ID');
        return;
      });

    afterAll(() => {
        // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
      });
});