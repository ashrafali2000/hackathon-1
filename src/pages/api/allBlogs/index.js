import { getAllBlogsAll ,addBlogs } from "@/services/user";


  export default function handler(req, res) {
  if(req.method === "GET") {
    const mydata = getAllBlogsAll();
    res.status(200).json(mydata);
  }

    //  if (req.method === "POST") {
    //     const {heading,description} = req.body;
    //     const updatedProducts = addBlogs(heading,description);
    //     return res.status(201).json(updatedProducts);
    //   }
}