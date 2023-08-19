import { getAllAccounts1 ,signUp1 } from "@/services/user";

  //   sign-up
  export default function handler(req, res) {
  if(req.method === "GET") {
    const mydata = getAllAccounts1();
  //   console.log(mydata)
    res.status(200).json(mydata);
  }

     if (req.method === "POST") {
        const {name, email,password, repeatPassword,blogs} = req.body;
        const updatedProducts = signUp1(name, email,password ,repeatPassword,blogs);
        return res.status(201).json(updatedProducts);
      }
}