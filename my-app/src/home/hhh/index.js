import React,{Component} from 'react';
export default class HomeCare extends Component{
    render(){

        return (
            <div className="home-care">
                <p className="care">- 高 端 洗 护 -</p>
                <div className="care-titles">
                    <span className="care-title">
                        <span className="title">奢饰品养护</span>
                    </span>
                    <span to='/list/2' className="care-title">
                        <span className="title">高端成衣家纺</span>
                    </span>
                </div>
            </div>
        )
    }
}
