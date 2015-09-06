/**
 * Tab Component for tingle
 * @author zhangshun
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var TabItem = require('./TabItem');
var classnames = require('classnames');
var Scroller = require('tingle-scroller');
class Tab extends React.Component {

    /**
     * 初始化 state
     * @param  {[type]} props [description]
     * @return {[type]}       [description]
     */
    constructor(props) {
        super(props);
        this.state = {
            index: props.index
        }
    }
    /**
     * 挂载后，计算宽度，实例化滚动
     * @return {[type]} [description]
     */
    componentDidMount() {
        // 计算宽度和滚动
        var t = this;
        if (!t.props.scroll) {
            return;
        }
        var w = 0;
        var scrollEl = React.findDOMNode(t.refs.scroll);
        var chNodes = scrollEl.childNodes;
        for (var i = 0, l = chNodes.length; i < l; i++) {
            w += chNodes[i].offsetWidth + 1;
        }

        scrollEl.style.width = w + "px";
        // 实例化滚动
        t.refs.head.scroller.refresh();
    }

    /**
     * 响应索引改变事件
     * @param  {[type]} index [description]
     * @param  {[type]} data  [description]
     * @param  {[type]} e     [description]
     * @return {[type]}       [description]
     */
    handleChange(index, data, e) {
        var t = this;
        var preIndex = t.state.index;
        t.setState({
            index: index
        });
        t.props.onChange({
            index: index,
            preIndex: preIndex,
            data: data,
            e: e
        });
    }

    /**
     * 内置方法 渲染
     * @return {[type]} [description]
     */
    render() {
        var t = this;
        var _className = classnames({
            'tTab': true,
            [t.props.className]: !!t.props.className
        });
        return (<div className={_className}>
            {t._renderHead()}
            {t._renderBody()}
        </div>)
    }

    /**
     * 选择 head
     * @return {[type]} [description]
     */
    _renderHead() {
        var t = this;
        let isScroll = t.props.scroll;
        if (t.props.children.length < 5) {
            isScroll = false;
        }
        return <Scroller className="tTabHead" scrollX={true} scrollY={false} ref="head">
        <div className={classnames({
                    'tTabHeadScroll': isScroll,
                    'tTabHeadContainer tCL tFBH':true,
                })} ref="scroll">
        {
            React.Children.map(t.props.children, (child, index) => {
                var _className = classnames({
                    'tTabHeadItem tFL tFAC': true,
                    'tFB1':!isScroll,
                    'active': t.state.index == index
                });
                return <div className={_className} key={index} index={index}  onClick={t.handleChange.bind(t,index, child.props.data)} ><span>{child.props.title}</span></div>
            })
        }
        </div>
        </Scroller>
    }

    /**
     * 渲染 body
     * @return {[type]} [description]
     */
    _renderBody() {
        var t = this;
        return <div className="tTabBody">
        {
            React.Children.map(t.props.children, (child, index) => {
                var _className = classnames({
                    'tTabBodyItem': true,
                    'tHide': !(t.state.index == index)
                });
              return <div className={_className} key={index} index={index} >{child}</div>
            })
        }
        </div>;
    }

}


/**
 * [defaultProps description]
 * @type {Object}
 */
Tab.defaultProps = {
    index: 0,
    scroll:true,
    onChange:function(){}
}

// http://facebook.github.io/react/docs/reusable-components.html
/**
 * [propTypes description]
 * @type {Object}
 */
Tab.propTypes = {
    index: React.PropTypes.number,
    onChange: React.PropTypes.func,
    scroll: React.PropTypes.bool
}

Tab.item = TabItem;
Tab.displayName = 'Tab';

module.exports = Tab;

