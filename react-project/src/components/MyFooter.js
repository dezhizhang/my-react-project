import React from 'react'
import {Layout} from 'antd'
const{ Footer} =Layout
class MyFooter extends React.Component{
    render(){
        return (<div>
           <Layout>
               <Footer>©ALIMAMA MUX, powered by alimama THX.法律声明
转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源，商业媒体及纸媒请先联系：sangxing@taobao.com</Footer>
           </Layout>
        </div>)
    }
}

export default MyFooter
