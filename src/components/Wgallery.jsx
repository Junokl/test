import React from 'react';
import {connect} from 'react-redux';
import 'weui';
class Wgallery extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

    }
    render() {
        return (
            <div className="page gallery js_show">
                <div className="page__hd">
                    <h1 className="page__title">Gallery</h1>
                    <p className="page__desc">画廊，可实现上传图片的展示或幻灯片播放</p>
                </div>
                <div className="weui-gallery" style={{display:this.props.isShowPhtho.bool?"block":"none"}}>
                    <span className="weui-gallery__img" style={{backgroundImage: `url(${this.props.isShowPhtho.src})`}}></span>
                    <div onClick={this.props.togglePhtho.bind(this)} className="weui-gallery__opr">
                        <a href=" " className="weui-gallery__del">
                            <i className="weui-icon-delete weui-icon_gallery-delete"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state)=>{
    return state;
},(dispatch)=>{
    return {
        togglePhtho(src){
            dispatch({
                type:'togglePhtho',
                isShowPhtho:{
                    bool:!this.props.isShowPhtho.bool,
                    src:''
                }
            })
        }
    }
})(Wgallery);