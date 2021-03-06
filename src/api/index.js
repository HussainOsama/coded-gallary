import axios from "axios";

// const data = async () => {
//   try {
//     const data = await axios.get("http://localhost:5000/posts");
//     return data;
//   } catch (err) {
//     console.log("Data Fetch Failed");
//   }
// };

// let x = data();
const url = "https://coded-gallary.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`);
// router.patch("/posts/:id/likepost", likePost);
