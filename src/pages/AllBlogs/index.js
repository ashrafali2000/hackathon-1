import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";
import { UserOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';
import { Avatar, Space } from 'antd';
export default function AllblgCard({heading, description}) {
    let date = new Date();
    let fulldate = date.toDateString();
    let checkDate = fulldate.toString();
    let getDate =    checkDate.slice(3)

return (
    <div>
        <Card  style={{
            width:750,
            display:"flex",
            alignItems: "flex-start",
            justifyContent:"flex-start",
            flexDirection:"column",
            boxShadow:"1px 1px 9px #777",
            gap:10
        }}>
        <div style={{textAlign:'center', marginTop:50 , display:"inline-block"}}><Avatar size={64} icon={<UserOutlined />} /></div>   
 <span style={{
                fontSize: 22,
                fontWeight:500
            }}>{heading} </span><span>{getDate}</span>
            <p>{description}</p>
     <div className="btnCarddiv1"><Link href={"/AllBlogsFromOneUser"} >see all from this user</Link></div>
        </Card>
    </div>
)
}