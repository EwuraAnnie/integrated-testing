const {fetchData }= require("./fetchData");

describe('Testing Post', () => {
    it("should return 100 posts", async () => {
        const posts = await fetchData("posts");
        expect(posts.length).toBe(100);
    });
    it("should contain post with ID of 4", async () => {
        const posts = await fetchData("posts");
        expect(posts).toContainEqual( {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          });
    });
});
















// const { fetchData } = require("./fetchData");

// describe('Testing Post', () => {
//     it("should return 100 posts", async () => {
//         const posts = await fetchData("posts");
//         expect(posts.length).toBe(100);
//     });
//     it("should contain post wth ID of 100", async () => {
//         const posts = await fetchData("posts");
//         expect(posts).toContainEqual({
//                 "userId": 3,
//                 "id": 21,
//                 "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
//                 "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
//         })
//     })
// });


