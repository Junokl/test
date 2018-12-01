import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
class Wheader extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.props = props;
        this.state = {
            nav: 0,
            navs: [
                { title: "热门", href: "/home/hot/", channel: "" },
                { title: "新鲜事", href: "/home/new/", channel: "" },
                { title: "搞笑", href: "", channel: "" },
                { title: "情感", href: "", channel: "" },
                { title: "明星", href: "", channel: "" },
                { title: "社会", href: "", channel: "" },
                { title: "数码", href: "", channel: "" },
                { title: "体育", href: "", channel: "" },
                { title: "汽车", href: "", channel: "" },
                { title: "电影", href: "", channel: "" },
                { title: "游戏", href: "", channel: "" }
            ]
        }

    }
    togglenav(index, e) {
        this.setState({
            nav: index
        })
        this.props.history.push(this.state.navs[index].href);
    }
    render() {
        return (
            <div className="lite-topbar main-top">
                <div className="nav-top">
                    <div className="nav-left unlogin-logo">
                    </div>
                    <a href='1' className="nav-search unlogin-search">
                        <aside >
                            <label className="m-search">
                                <i className="m-font m-font-search"></i>
                                <div className="m-text-cut"> 大家都在搜：携程亲子园案8人判刑</div>
                            </label>
                        </aside>
                    </a>
                    <div className="nav-right">
                        <div className="lite-iconf lite-iconf-releas"></div>
                    </div>
                </div>
                <div className="nav-main">
                    <div className="m-box">
                        <div className="m-box-col inner-box">
                            <div className="scroll-box slide-container">
                                <div className="slide-wrap">
                                    <ul className="nav_item">
                                        {
                                            (() => {
                                                return this.state.navs.map((item, index) => {
                                                    return (
                                                        <li key={index} className={index === this.state.nav ? "item_li cur" : "item_li"}
                                                            onClick={this.togglenav.bind(this, index)}
                                                        >
                                                            <Link to={ {pathname:`/home/${item.href}` }}  replace 
                                                            style={{color:'#000'}}
                                                            >

                                                                <span>{item.title}<em></em></span>
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            })()
                                        }


                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div onClick={this.props.toggleNav.bind(this)}
                            className="nav-plus m-box-center m-box-center-a">
                            <i className="m-font m-font-arrow-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state) => {
    // console.log(state);
    return state;
}, (dispatch) => {
    return {
        toggleNav() {
            // console.log(this);
            dispatch({
                type: 'toggleNav',
                isShowNav: !this.props.isShowNav
            })
        }
    }
})(Wheader);