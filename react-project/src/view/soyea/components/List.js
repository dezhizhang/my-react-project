import React from 'react'
import { Card } from 'antd';
import uuid from 'uuid';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[  {
                id:uuid(),
                title:'我是新闻的第一条，哈哈哈哈哈哈我是新闻的第一条，哈哈哈哈哈哈我是新闻的第一条，哈哈哈哈哈哈',
                completed:false 
                },
                {
                id:uuid(),
                title:'我是新闻的第一条，哈哈哈哈哈哈',
                completed:false 
                },
                {
                id:uuid(),
                title:'我是新闻的第一条，哈哈哈哈哈哈',
                completed:false 
                },
                  {
                id:uuid(),
                title:'我是新闻的第一条，哈哈哈哈哈哈',
                completed:false 
                },
                {
                id:uuid(),
                title:'我是新闻的第一条，哈哈哈哈哈哈',
                completed:false 
                },
                {
                id:uuid(),
                title:'我是新闻的第一条，哈哈哈哈哈哈',
                completed:false 
                },
                {
                    id:uuid(),
                    title:'我是新闻的第一条，哈哈哈哈哈哈',
                    completed:false 
                    },
                    {
                    id:uuid(),
                    title:'我是新闻的第一条，哈哈哈哈哈哈',
                    completed:false 
                    },
                      {
                    id:uuid(),
                    title:'我是新闻的第一条，哈哈哈哈哈哈',
                    completed:false 
                    },
                    {
                    id:uuid(),
                    title:'我是新闻的第一条，哈哈哈哈哈哈',
                    completed:false 
                    },
                    {
                    id:uuid(),
                    title:'我是新闻的第一条，哈哈哈哈哈哈',
                    completed:false 
                    },
                    {
                        id:uuid(),
                        title:'我是新闻的第一条，哈哈哈哈哈哈',
                        completed:false 
                        },
                        {
                        id:uuid(),
                        title:'我是新闻的第一条，哈哈哈哈哈哈',
                        completed:false 
                        },
                          {
                        id:uuid(),
                        title:'我是新闻的第一条，哈哈哈哈哈哈',
                        completed:false 
                        },
                        {
                        id:uuid(),
                        title:'我是新闻的第一条，哈哈哈哈哈哈',
                        completed:false 
                        },
                        {
                        id:uuid(),
                        title:'我是新闻的第一条，哈哈哈哈哈哈',
                        completed:false 
                        },
                        {
                            id:uuid(),
                            title:'我是新闻的第一条，哈哈哈哈哈哈',
                            completed:false 
                            },
                            {
                            id:uuid(),
                            title:'我是新闻的第一条，哈哈哈哈哈哈',
                            completed:false 
                            },
                              {
                            id:uuid(),
                            title:'我是新闻的第一条，哈哈哈哈哈哈',
                            completed:false 
                            },
                            {
                            id:uuid(),
                            title:'我是新闻的第一条，哈哈哈哈哈哈',
                            completed:false 
                            },
                            {
                            id:uuid(),
                            title:'我是新闻的第一条，哈哈哈哈哈哈',
                            completed:false 
                            },
              
            

        ]
        }
    }
    componentDidMount(){
       fetch('https://github.com/dezhizhang').then(response=>{
           return response.json()
       }).then(data=>{
           console.log(data);
           
       })
    }
    render(){
        return (<div>
            <Card>
                <ul>
                   {
                       this.state.data.map((item,index)=>{
                           return (<li key={index}>{item.title}</li>)
                       })
                   }
                </ul>
            </Card>
        </div>)

    
    }
}

export default List