import React from 'react'
import {Switch,Route} from 'react-router-dom'
import SoYea from '../view/soyea/SoYea'
import ToTiao from '../view/totiao/ToTiao'
import ShiHui from '../view/shihui/ShiHui'
import QinGan from '../view/qingan/QinGan'
import GuoLa from '../view/guola/GuoLa'
import GuoWei  from '../view/guowei/GuoWei'
import ShiSheng from '../view/shisheng/ShiSheng'
import Goxiao from '../view/goxiao/GoXiao'
class IndexRouter extends React.Component{
    render(){
        return (<div>
            <Switch>
                <Route exact path='/' component={SoYea}/>
                <Route exact path='/total' component={ToTiao}/>
                <Route exact path='/shihui' component={ShiHui}/>
                <Route exact path='/qingan' component={QinGan}/>
                <Route exact path='/guola' component={GuoLa}/>
                <Route exact path='/guowei' component={GuoWei}/>
                <Route exact path='/shosheng' component={ShiSheng}/>
                <Route exact path='/goxiao' component={Goxiao}/>
            </Switch>
        </div>)
    }
}

export default IndexRouter