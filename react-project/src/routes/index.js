import React from 'react'
import {Swith,Route} from 'react-router-dom'
import SoYea from '../view/soyea/SoYea'
import ToTiao from '../view/totiao/Totiao'
import ShiHui from '../view/shihui/ShiHui'
import QinGan from '../view/qingan/QinGan'
import GuoLa from '../view/guola/GuoLa'
import GuoWei  from '../view/guowei/GuoWei'
import ShiSheng from '../view/shisheng/ShiSheng'
import Goxiao from '../view/goxiao/GoXiao'
class IndexRouter extends React.Component{
    render(){
        return (<div>
            <Swith>
                <Route path='/' component={SoYea}/>
                <Route path='/total' component={ToTiao}/>
                <Route path='/shihui' component={ShiHui}/>
                <Route path='/qingan' component={QinGan}/>
                <Route path='/guola' component={GuoLa}/>
                <Route path='/guowei' component={GuoWei}/>
                <Route path='/shosheng' component={ShiSheng}/>
                <Route path='/goxiao' component={Goxiao}/>
            </Swith>
        </div>)
    }
}

export default IndexRouter