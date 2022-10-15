import React, { Component } from 'react';

type ListProps = {
    title:string,
    desc:number
}


type DataInfo = {
    data:number
}


class List extends Component<ListProps,DataInfo>{

    data={
        count:50
    }
    
    
    render(): React.ReactNode {
        return(
            <ul>
                <li>{this.props.title}</li>
                <li>{this.props.desc}</li>
                <li>{this.data.count}</li>
            </ul>
        )
    }
}
class ClassComp extends Component{
    render(): React.ReactNode {
        
        return(
            <>
            <List  title="Hello" desc={20}/>
            </>
        )
    }
}


export default ClassComp
