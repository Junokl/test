import React from 'react';
import {Link } from 'react-router-dom';
class Wpannel extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            cards:[]
        }
    }
    getdata(){
        React.axios.get('./jsons/index.json')//../Jsons/index.json
        .then( (res)=>{
            this.setState({
                cards:res.data.data.cards
            })
            // console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    componentDidMount(){
        this.getdata();
    }
    render(){
        return (
            <div  style={{transform: "translateY(-32px)",transitionDuration:" 0s",marginTop:"85px"}}>
                <div className="m-tips m-tips-tp">
                    <i className="m-font m-font-down m-font-down-ani"></i>
                    <span className="main-link">下拉刷新</span>
                </div>
                <div  className="pannelwrap" style={{paddinTop: "0px", paddingBottom: "0px"}}>
                    <div  className="wb-item-wrap">
                        <div  className="wb-item">
                            
                        </div>
                    </div>
                    {
                        (()=>{
                            return this.state.cards.map((item,index)=>{
                                return(
                                    <div  className="wb-item-wrap" key={index}>
                                        <Link to='/detail/' className="wb-item" style={{color:"#000"}}>
                                            <div  className="card m-panel card9 f-weibo">
                                                <div className="card-wrap">
                                                    
                                                    <header className="weibo-top m-box">
                                                        <div className="m-avatar-box m-box-center">
                                                            <a href="/profile/1826792401" className="m-img-box">
                                                                <img src={item.mblog.bmiddle_pic} alt='user-bg'/>
                                                                <i className="m-icon m-icon-goldv-static"></i>
                                                            </a>
                                                        </div>
                                                        <div className="m-box-dir m-box-col m-box-center">
                                                            <div className="m-text-box">
                                                                <a href="/profile/1826792401" className="">
                                                                    <h3 className="m-text-cut">{item.mblog.user.screen_name}
                                                                        
                                                                        <i className="m-icon m-icon-vipl7"></i>
                                                                    </h3>
                                                                </a>
                                                                <h4 className="m-text-cut">
                                                                    <span className="time">{item.mblog.created_at}</span>
                                                                    <span className="from"> 来自 {item.mblog.source}</span>
                                                                    
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div callback="follow()" className="m-add-box m-followBtn">
                                                            <span className="m-add-box">
                                                                <i className="m-font m-font-plus"></i>
                                                                <h4>关注</h4>
                                                            </span>
                                                        </div>
                                                    </header>
                                                </div>
                                                <article className="weibo-main">
                                                    <div className="card-wrap" dangerouslySetInnerHTML={{__html:item.mblog.text}}>
                                                        
                                                    </div>
                                                    
                                                </article>
                                                <footer className="f-footer-ctrl">
                                                    <div className="m-diy-btn m-box-center-a">
                                                        <i className="lite-iconf lite-iconf-report"></i>
                                                        <h4>3.2万</h4>
                                                    </div>
                                                    <div className="m-diy-btn m-box-center-a">
                                                        <i className="lite-iconf lite-iconf-comments"></i>
                                                        <h4>8.3万</h4>
                                                    </div>
                                                    <div className="m-diy-btn m-box-center-a">
                                                        <i className="lite-iconf lite-iconf-like"></i>
                                                        <h4>55万</h4>
                                                    </div>
                                                    <aside>
                                                        <i className="m-font m-font-dot-more"></i>
                                                    </aside>
                                                </footer>
                                            </div>
                                        </Link>
                                    </div>
                                    )
                            })
                        })()
                    }
                                    
                                
                    
                </div>
                
                
            </div>
            )
    }
}
export default Wpannel;