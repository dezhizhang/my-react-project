import React from 'react'
import {Carousel,Row,Col} from 'antd';
class SoYea extends React.Component{

    render(){
        const settings={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        }
        return (<div>
            <Row>
                <Col span={2}></Col>
                   <Col span={20}>
                    <Carousel dots={true}
                    style={{width:'500px'}}
                    autoplay={true} 
                    >
                        <div>
                            <img style={{width:'500px',height:'300px',marginTop:'5px'}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531666669&di=75699992d2ee6c33ec4f0f6ca8ccf15a&imgtype=jpg&er=1&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F07%2F65%2F16pic_765391_b.jpg'/>
                        </div>
                        <div>
                            <img style={{width:'500px',height:'300px',marginTop:'5px'}} src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3287998705,4210783580&fm=27&gp=0.jpg'/>
                        </div>
                        <div>
                           <img style={{width:'500px',height:'300px',marginTop:'5px'}} src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998827418,1760886258&fm=27&gp=0.jpg'/>
                        </div>
                        <div>
                            <img style={{width:'500px',height:'300px',marginTop:'5px'}} src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4249085493,2771979155&fm=200&gp=0.jpg'/>
                        </div>
                    </Carousel>
                  </Col>
                <Col span={2}></Col>
            </Row>
        </div>)
    }
}

export default SoYea