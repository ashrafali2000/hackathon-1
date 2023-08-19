import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(),"src", "database","products.json" );
const filePath2 = path.join(process.cwd(), "database","allProduct.json" );
const filePathForSingleProduct = path.join(process.cwd(), "database", "singleProduct.json");
const filePathForSignUP = path.join(process.cwd(),"src","database", "account.json");
const filePathForSignUP1 = path.join(process.cwd(),"src","database", "userWithblogs.json");
const fileBlogs = path.join(process.cwd(), "src", "database","blogs.json" );
const fileAllblogs = path.join(process.cwd(), "src", "database","allBlogs.json" );
export function getAllProducs() {
   const data = fs.readFileSync(filePath);
   return JSON.parse(data);
}

export function getAllProducs1() {
   const data = fs.readFileSync(filePath2);
   return JSON.parse(data);
}

export function getSingleProducsById(id) {
   const {products} = getAllProducs();
  const  productDetails = products.find(item => item.id === id);
   return productDetails;
}

export function addProduct(title,description,price, discountPercentage, rating,stock,brand,category,images) {
    const { products } = getAllProducs();
    products.push({
      id: products.length + 1,
      title,price,description,discountPercentage,rating,stock,brand,category,images
    });
    fs.writeFileSync(filePath, JSON.stringify({ products }));
  
    return products;
  }


  // Code for more comment an array forms
// for comment
  export function getCommentById(id,comment) {
   let {products} = getAllProducs();
      let commentArr = products.find(item => item.id === Number(id));
      commentArr.comment.push(comment);
      products.push(commentArr);
    products = products.filter((obj, index) =>
products.findIndex((item) => item.id === obj.id) === index
 );
   fs.writeFileSync(filePath, JSON.stringify({products}));
   return products;
}

// for all Products page
  export function getCommentById1(id,comment) {
   let {products} = getAllProducs1();
      let commentArr = products.find(item => item.id === Number(id));
      commentArr.comment.push(comment);
      products.push(commentArr);
    products = products.filter((obj, index) =>
products.findIndex((item) => item.id === obj.id) === index
 );
   fs.writeFileSync(filePath2, JSON.stringify({products}));
   return products;
}




// every product Details
export function getOneProductsById(id) {
  let {products} = getAllProducs();
 const  productDetails = products.find(item => item.id === Number(id));

 fs.writeFileSync(filePathForSingleProduct, JSON.stringify({productDetails}));
  return productDetails;
}

export function getOneProductsById1(id) {
  let {products} = getAllProducs1();
 const  productDetails = products.find(item => item.id === Number(id));

 fs.writeFileSync(filePathForSingleProduct, JSON.stringify({productDetails}));
  return productDetails;
}


// getAllAccounts
export function getAllAccounts() {
  const data = fs.readFileSync(filePathForSignUP);
  return JSON.parse(data);
}

// signUp accont
export function signUp(name,email,password) {
 const {userId} = getAllAccounts();
  let val = false;
  for(let a = 0; a < userId.length; a++) {
    if(userId.length !== 0 && userId[a].email === email){
    console.log(userId)
    val = true;
    break;
  }
}
if(val){
    fs.writeFileSync(filePathForSignUP, JSON.stringify({ userId }));
      return userId;
  }
else{
  userId.push({name,email,password});
    fs.writeFileSync(filePathForSignUP, JSON.stringify({ userId }));
    return userId;
  }
}

// Blogs
export function getAllBlogs() {
    const data = fs.readFileSync(fileBlogs);
    return JSON.parse(data);
 }

// new blogs
export function addBlogs(heading,description) {
    const { userBlogs } = getAllBlogs();
    userBlogs.push({
      id: userBlogs.length + 1,
      heading,description
    });
    fs.writeFileSync(fileBlogs, JSON.stringify({ userBlogs }));
  
    return userBlogs;
  }

//   Delete Blogs
export function deleteOneblog(id) {
    const { userBlogs } = getAllBlogs();
    userBlogs.filter(blg => blg.id !== Number(id));
    fs.writeFileSync(fileBlogs, JSON.stringify({userBlogs}));
    return userBlogs;
}

// allBlogs
export function getAllBlogsAll() {
   const data = fs.readFileSync(fileAllblogs);
   return JSON.parse(data);
}

export function addBlogs1(heading,description) {
    const { userBlogs } = getAllBlogs();
    userBlogs.push({
      id: userBlogs.length + 1,
      heading,description
    });
    fs.writeFileSync(fileBlogs, JSON.stringify({ userBlogs }));
  
    return userBlogs;
  }



// userwhthblog
export function getAllAccounts1() {
    const data = fs.readFileSync(filePathForSignUP1);
    return JSON.parse(data);
  }
  export function signUp1(name,email,password,blogs) {
    const {userId} = getAllAccounts1();
     let val1 = false;
     for(let a = 0; a < userId.length; a++) {
       if(userId.length !== 0 && userId[a].email === email){
       console.log(userId)
       val1 = true;
       break;
     }
   }
   if(val1){
       fs.writeFileSync(filePathForSignUP1, JSON.stringify({ userId }));
         return userId;
     }
   else{
     userId.push({name,email,password, blogs});
       fs.writeFileSync(filePathForSignUP1, JSON.stringify({ userId }));
       return userId;
     }
   }