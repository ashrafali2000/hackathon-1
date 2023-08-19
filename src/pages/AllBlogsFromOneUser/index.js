import Card from "antd/es/card/Card";
import { UserOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';
import { Avatar, Space } from 'antd';
export default function AllBlogsfromOneUsr() {
return(<div>
    <Card style={{width: 600,boxShadow:"1px 1px 8px #777"}}>
    <div style={{textAlign:'center', marginTop:50 , display:"inline-block"}}><Avatar size={64} icon={<UserOutlined />} />   <h1 style={{fontSize:30}}>What is a blog why we need</h1></div> 
      <p>
      If you dont, then youve come to the right place. In 1994, when blogs began, a 
      began, a blog was more of a personal diary that people shared online.
      In this online journal, you could talk about your daily life or share
      about things that you were doing. Then, people saw an opportunity to
      communicate information in a new way online. Thus began the
      beautiful world of blogging.
      </p>
    </Card>
</div>)
}