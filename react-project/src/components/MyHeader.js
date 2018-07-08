import React from 'react';
import {
    Layout,
    Row,
    Col,
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Modal,
    Button,
    Checkbox
} from 'antd';
import { Link } from 'react-router-dom';
import MenuItem from '../../node_modules/antd/lib/menu/MenuItem';
import FormItem from '../../node_modules/antd/lib/form/FormItem';
const {Header,Footer}=Layout;

class MyHeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentKey:'soyea',
            visible:false,
            action:'login',
            userId:0,
            userNickName:''
        }
    }
    handleOk=()=>{
        this.setState({
            visible:false
        })
    }
    fnSubmit=(ev)=>{

       ev.preventDefault();
    }
    handleCancle=()=>{
        this.setState({
            visible:false
        })
    }
    fnShowModal=(e)=>{
       if(e.key='register'){
           this.setState({currentKey:'register'});
           this.setState({visible:true})
       }else{
            this.setState({currentKey:'e.key'});
            this.setState({visible:true});
       }

    }
    
    render(){
        //let {getFileProps}=this.props.form;
        let userShow=this.state.hasLogined ? 
        <Menu.Item key='loginout'>
            <Button type='primary'>{this.state.userNickName}</Button>
            <Link target="_blank">
              <Button type='dished' hemlType='button'>个人中心</Button>
            </Link>
            <Button type='ghost' htmlType='button'>退出登录</Button>
        </Menu.Item>
        :<Menu.Item key='register' onClick={this.fnShowModal}>
            <Icon type='appstore'/>注册/登录
        </Menu.Item>
        
        return (<div>
           <Layout>
               <Header>
                   <Row>
                       <Col span={2}></Col>
                       <Col span={4}>
                         <a href='/' style={{fontSize:'20px',color:'#fff'}}>好利来有限公司</a>
                       </Col>
                       <Col span={16}>
                         <Menu mode='horizontal'  selectedKeys={[this.state.currentKey]} theme='dark' style={{marginTop:'10px'}}>
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
                             {userShow}
                         </Menu>
                       </Col>
                       <Modal
                         title='用户中心'
                         visible={this.state.visible}
                         onOk={this.handleOk}
                         onCancel={this.handleCancle}
                         okText='关闭'
                         cancelText='取消'
                       >
                           <Tabs type='card'>
                               <Tabs.TabPane tab='注册' key={2}>
                                   <Form horizontal onSubmit={this.fnSubmit}>
                                     <FormItem label='帐户'>
                                       <Input placeholder='请输入你的帐号'/>
                                     </FormItem>
                                     <FormItem label='密码'>
                                       <Input type='password' placeholder='请输入你的密码' />
                                     </FormItem>
                                     <FormItem label='确认密码'>
                                        <Input type='password' placeholder='请再次输入密码'/>
                                     </FormItem>
                                     <Button type='primary' htmlType='submit'>注册</Button>
                                   </Form>
                               </Tabs.TabPane>
                           </Tabs>
                       </Modal>
                       <Col span={2}></Col>

                   </Row>
               </Header>
           </Layout>
        </div>)
    }


}

export default MyHeader