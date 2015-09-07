/**
 * Tab Component Demo for tingle
 * @author zhangshun
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const Tab = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange(obj) {
        let t = this;
    }

    render() {
        let t = this;
        return (
            <div>
                <Tab scroll={true} index={2} onChange={t.handleChange.bind(t)}>
                    <Tab.item title="头条" data={{"customKey1": "自定义值1", "customKey2": "自定义值2"}}>
                        <div className="tLH1_5 tP10">
                            与 Angular，Ember，Backbone 等等比起来 React 的表现如何？要如何处理数据？要如何连接服务器？JSX 到底是什么？“组件”又是如何定义的？
                        </div>
                    </Tab.item>
                    <Tab.item title="移动互联">
                        <div className="tLH1_5 tP10">
                            移动互联网，就是将移动通信和互联网二者结合起来，成为一体。是指互联网的技术、平台、商业模式和应用与移动通信技术结合并实践的活动的总称。4G时代的开启以及移动终端设备的凸显必将为移动互联网的发展注入巨大的能量，2014年移动互联网...
                        </div>
                    </Tab.item>
                    <Tab.item title="热点">
                        <div className="tLH1_5 tP10">
                            今日新闻网传播新闻事实,关注最近热点新闻事件,最新新闻报道国内、国际、财经、房产、娱乐、体育、消费、数码科技等新闻消息,今日关注探寻热点新闻事件真相,对今日关注...
                        </div>
                    </Tab.item>
                    <Tab.item title="杭州">
                        <div className="demoListView tM10">
                        {t._renderListView("杭州")}
                        </div>
                    </Tab.item>
                    <Tab.item title="房产">
                        <div className="tLH1_5 tP10">
                            搜房网房天下是中国最大的房地产家居网络平台,提供全面及时的房地产新闻资讯内容,为所有楼盘提供网上浏览、业主论坛和社区网站,房地产精英人物个人主页,是国内房地产
                        </div>
                    </Tab.item>
                    <Tab.item title="体育">
                        <div className="tLH1_5 tP10">
                            新浪体育提供最快速最全面最专业的体育新闻和赛事报道,主要有以下栏目:中国足球、国际足球、篮球、NBA、综合体育、奥运、F1、网球、高尔夫、棋牌、彩票、视频、图片
                        </div>
                    </Tab.item>
                    <Tab.item title="财经">
                        <div className="tLH1_5 tP10">
                            新浪财经提供7X24小时财经资讯及全球金融市场报价，覆盖股票、债券、基金、期货、信托、理财、管理等多种面向个人和企业的服务
                        </div>
                    </Tab.item>
                    <Tab.item title="图片">
                        <div className="tLH1_5 tP10">
                            图片内容区域
                        </div>
                    </Tab.item>

                </Tab>


                <Tab index={2}  onChange={t.handleChange.bind(t)}>
                    <Tab.item title="全部" data={{"customKey1": "自定义值1", "customKey2": "自定义值2"}}>
                        <div className="tLH1_5 tP10">
                            与 Angular，Ember，Backbone 等等比起来 React 的表现如何？要如何处理数据？要如何连接服务器？JSX 到底是什么？“组件”又是如何定义的？
                        </div>
                    </Tab.item>
                    <Tab.item title="已完成">
                        <div className="tLH1_5 tP10">
                            移动互联网，就是将移动通信和互联网二者结合起来，成为一体。是指互联网的技术、平台、商业模式和应用与移动通信技术结合并实践的活动的总称。4G时代的开启以及移动终端设备的凸显必将为移动互联网的发展注入巨大的能量，2014年移动互联网...
                        </div>
                    </Tab.item>
                    <Tab.item title="未完成">

                    </Tab.item>
                    <Tab.item title="通过">

                    </Tab.item>


                </Tab>

            </div>
        );
    }

    _renderListView(title) {
        let listData = [
            "javascript",
            "html",
            "tingle",
            "seajs",
            "webpack",
            "Flexbox 设计指南2：垂直布局",
            "关注前端前沿技术，探寻业界深邃思想",
            "同构 JavaScript 应用 —— Web 世界的未来？"
        ];
        return <ul>{
            listData.map(function (item, index) {
                return <li key={index}>{title + "===" + item}</li>
            })
            }</ul>
    }
}
module.exports = Demo;
