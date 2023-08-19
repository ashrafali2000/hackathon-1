import { getAllBlogs ,addBlogs1 } from "@/services/user";

  //   sign-up
  export default function handler(req, res) {
  if(req.method === "GET") {
    const mydata = getAllBlogs();
  //   console.log(mydata)
    res.status(200).json(mydata);
  }

     if (req.method === "POST") {
        const {heading,description} = req.body;
        const updatedProducts = addBlogs1(heading,description);
        return res.status(201).json(updatedProducts);
      }

    //   if (req.method === "Delete") {
    //     const {id} = req.body;
    //     const updatedProducts = addBlogs(id);
    //     return res.status(201).json(updatedProducts);
    //   }
}