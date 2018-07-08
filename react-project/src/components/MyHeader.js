import React from 'react';
import {Layout,Row,Col,Menu,Icon} from 'antd';
import { Link } from 'react-router-dom';
import MenuItem from '../../node_modules/antd/lib/menu/MenuItem';
const {Header,Footer}=Layout;

class MyHeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentKey:'soyea'
        }
    }
    render(){
        return (<div>
           <Layout>
               <Header>
                   <Row>
                       <Col span={2}></Col>
                       <Col span={4}>
                         <a href='/' style={{fontSize:'20px',color:'#fff'}}>好利来有限公司</a>
                       </Col>
                       <Col span={16}>
                         <Menu mode='horizontal' selectedKeys={[this.state.currentKey]} theme='dark' style={{marginTop:'10px'}}>
                             <MenuItem key='soyea'>
                                 <Icon type='desktop'/>首页
                             </MenuItem>
                             <MenuItem key='totiao'>
                                 <Icon type='cloud'/>头条
                             </MenuItem>
                             <MenuItem key='shihui'>
                                 <Icon type='frown'/>社会
                             </MenuItem>
                             <MenuItem key='guola'>
                                 <Icon type='appstore'/>国内
                             </MenuItem>
                             <MenuItem key='guowei'>
                                 <Icon type='picture'/>国外
                             </MenuItem>
                             <MenuItem key='shisheng'>
                                 <Icon type='heart'/>时尚
                             </MenuItem>
                             <MenuItem key='goxiao'>
                                 <Icon type='bank'/>搞笑
                             </MenuItem>
                             <MenuItem key='qingan'>
                                 <Icon type='user-add'/>情感
                             </MenuItem>
                         </Menu>
                       </Col>
                       <Col span={2}></Col>

                   </Row>
               </Header>
           </Layout>
        </div>)
    }


}

export default MyHeader