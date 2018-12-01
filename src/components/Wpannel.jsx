import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
class Wpannel extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(props);
        this.state = {
            cards: []
        }
    }
    getdata() {
        React.axios.get('./jsons/index.json')//../Jsons/index.json
            .then((res) => {
                this.setState({
                    cards: res.data.data.cards
                })
                // console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        this.getdata();
    }
    render() {
        return (
            <div className="pannelwrap" style={{
                paddingTop: "0px",
                paddingBottom: "0px",
                marginTop: "35px"
            }}>
                {
                    (() => {
                        return this.state.cards.map((item, index) => {
                            return (
                                <div key={index} className="wb-item-wrap">
                                    <div className="wb-item">
                                        <div className="card m-panel card9 f-weibo">
                                            <div className="card-wrap">
                                                <header className="weibo-top m-box">
                                                    <div className="m-avatar-box m-box-center">
                                                        <Link to="/detail/" className="m-img-box">
                                                            <img src={item.mblog.user.avatar_hd} alt="avatar" />
                                                        </Link></div>
                                                    <div className="m-box-dir m-box-col m-box-center">
                                                        <div className="m-text-box"><a href="/profile/2370784220" className="">
                                                            <h3 className="m-text-cut">{
                                                                item.mblog.user.screen_name
                                                            }
                                                                <i className="m-icon m-icon-vipl7"></i></h3>
                                                        </a>
                                                            <h4 className="m-text-cut"><span className="time">{item.mblog.created_at}</span> <span className="from">
                                                                来自 {item.mblog.source}</span>

                                                            </h4>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                            <article className="weibo-main">
                                                <div className="card-wrap">
                                                    <div className="weibo-og">
                                                        <div className="weibo-text" dangerouslySetInnerHTML={{ __html: item.mblog.text }}>
                                                        </div>
                                                        <div>
                                                            <div className="weibo-media-wraps weibo-media f-media media-b">
                                                                <ul className="m-auto-list">
                                                                    <li onClick={this.props.togglePhtho.bind(this,item.mblog.user.avatar_hd)}
                                                                     className="m-auto-box2"
                                                                    style={{width:"92px",height:"92px"}}
                                                                    >
                                                                        <div className="m-img-box m-imghold-4-3" style={{
                                                                            height: "100px"
                                                                        }}>
                                                                            <img style={{
                                                                                width: "92.31px",
                                                                                height: "92.31px"
                                                                            }} src="https://wx2.sinaimg.cn/orj360/a121e3fbgy1fs632af3z8j20fk0fk3ze.jpg"
                                                                                className="f-bg-img" alt="f-bg-img" />

                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            <footer className="f-footer-ctrl">
                                                <div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-report"></i>
                                                    <h4>16</h4>
                                                </div>
                                                <div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-comments"></i>
                                                    <h4>4</h4>
                                                </div>
                                                <div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-like"></i>
                                                    <h4>45</h4>
                                                </div>
                                                <aside><i className="m-font m-font-dot-more"></i></aside>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    })()
                }
            </div>
        )
    }
}
export default connect((state)=>{
    console.log(state);
    return state;
    
},(dispatch)=>{
    return {
        togglePhtho(src){
            console.log(src);
            dispatch({
                type:'togglePhtho',
                isShowPhtho:{
                    bool:!this.props.isShowPhtho.bool,
                    src
                }
            })
        }
    }
})(Wpannel);