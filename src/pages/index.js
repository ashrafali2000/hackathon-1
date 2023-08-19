import { useEffect, useState } from "react";
import AllblgCard from "./AllBlogs";
export default function Home() {
  const [blg, setblg] = useState([])
  useEffect(() => {
    fetch("/api/blogs/")
      .then((res) => res.json())
      .then((p) => setblg(p.userBlogs));

  }, []);
  return (<div>
    <div >
    <div className="sign-header">Good Morning Reader!</div>
      </div>
      <div className="dashboardblogs"><h1>All Blogs</h1></div>
      <div className="allCardsBlog">
      {blg.map(b => <AllblgCard key= {b.id} heading = {b.heading} description = {b.description} ></AllblgCard>)}

      </div>
  </div>)
}