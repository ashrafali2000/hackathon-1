import { useRef, useState, useEffect } from "react"
import BlogCards from "../blogCard";
export default function Dashboard(){
    const [products, setProducts] = useState([]);

    // const [users, setUsers] = useState([])
    // if(!products){
    //     return (<div>
    //         Looding...
    //     </div>)
    // }
    
    useEffect(() => {
        fetch("/api/blogs/")
          .then((res) => res.json())
          .then((p) => setProducts(p.userBlogs));
      }, []);

    //   function handleDelete(id){
    //     fetch( "/api/blogs/" + "/" + id, {
    //       method: 'DELETE'
    //     }).then(() => {
    //        console.log('removed');
    //     }).catch(err => {
    //       console.error(err)
    //     });
    // }


    // const deleteUser = (id) => {
    //     fetch(`/api/blogs/`, {
    //       method: "DELETE",
    //     })
    //       .then(response => response.json())
    //       .then(() => {
    //         setProducts(values => {
    //           return values.filter(item => item.id !== id)
    //         })
    //     })
    // }


      const handleDelete1 = (id) => {
        const updatedData = products.filter((item) => item.id !== id)
        setProducts(updatedData)
      }

    const headingRef = useRef()
    const descriptionRef = useRef()

    const checkHandler = (event) => {
        event.preventDefault();
        const heading = headingRef.current.value;
        const description =descriptionRef.current.value;

        const newBlogs = JSON.stringify({heading,description });
        // POST method
        fetch("/api/blogs/", {
          method: "POST",
          body: newBlogs,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.json())
        .then((json) => console.log(json));


    }  

    return(
        <div>
            <div className="dashboard"><h1>Dashboard</h1></div>

            <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-lg formBorder userAddingblog">
                <form onSubmit={checkHandler}>
                <div className="mt-2">
                  <input
                    id="heading"
                    name="heading"
                    type="text"
                    ref={headingRef}
                    placeholder="heading"
                    autoComplete="heading"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2" style={{
                    marginTop: 20
                }}>
                  <textarea
                    id="description"
                    name="description"
                    type="textareat"
                    ref={descriptionRef}
                    placeholder="What is in your mind"
                    autoComplete="description"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div style={{textAlign:"start"}}>
                <button
                  type="submit"
                  className="btnBlog w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Publish blog
                </button>
              </div>
                </form>
            </div>
            <div className="dashboardblogs"><h1>My Blogs</h1></div>
            <div className="allCardsBlog">
                {products.map(blg => <BlogCards key={blg.id} heading = {blg.heading} description = {blg.description} handleDelete={handleDelete1} blg={blg}></BlogCards>)}
            </div>
        </div>
    )
}