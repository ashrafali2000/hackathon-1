import { Card } from "antd";
// import { Button } from "antd/es/radio";
// import Link from "next/link";
export default function BlogCards({heading, description,handleDelete,blg}) {
return (
    <div>
        <Card style={{
            width:300
        }}>
            <h1 style={{
                fontSize: 30,
                fontWeight:500
            }}>{heading}</h1>
            <p>{description}</p>
     <div className="btnCarddiv"> <button className="btnCard" onClick={() => handleDelete(blg.id)}>Delete</button><button className="btnCard">Edit</button></div>
        </Card>
    </div>
)
}