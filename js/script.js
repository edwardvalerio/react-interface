'use strict';

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var data = [{
    name: 'Home',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
}, {
    name: 'Bio',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
}, {
    name: 'About',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
}];

var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs() {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.state = {
            activeTab: 0,
            data: data
        };

        _this.changeTabOnClick = _this.changeTabOnClick.bind(_this);
        return _this;
    }

    Tabs.prototype.changeTabOnClick = function changeTabOnClick(index) {
        this.setState({
            activeTab: index
        });
    };

    Tabs.prototype.render = function render() {
        return React.createElement(
            'div', {
                className: 'tabs-body'
            },
            React.createElement(TabHeader, {
                data: this.state.data,
                click: this.changeTabOnClick,
                activeId: this.state.activeTab
            }),
            React.createElement(TabContent, {
                data: this.state.data,
                activeId: this.state.activeTab
            })
        );
    };

    return Tabs;
}(React.Component);

var TabHeader = function (_React$Component2) {
    _inherits(TabHeader, _React$Component2);

    function TabHeader() {
        _classCallCheck(this, TabHeader);

        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
    }

    TabHeader.prototype.doClick = function doClick(index, event) {
        this.props.click(index);
    };

    TabHeader.prototype.render = function render() {
        var _this3 = this;

        var activeClass = this.props.activeId;

        var tabs = this.props.data.map(function (item, index) {
            return React.createElement(
                'li', {
                    className: activeClass === index ? 'active' : ''
                },
                React.createElement(
                    'a', {
                        onClick: _this3.doClick.bind(_this3, index)
                    },
                    React.createElement(
                        'span',
                        null,
                        item.name
                    )
                )
            );
        });

        return React.createElement(
            'ul', {
                className: 'tabs-header'
            },
            tabs
        );
    };

    return TabHeader;
}(React.Component);

var TabContent = function (_React$Component3) {
    _inherits(TabContent, _React$Component3);

    function TabContent() {
        _classCallCheck(this, TabContent);

        return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
    }

    TabContent.prototype.render = function render() {
        var activeClass = this.props.activeId;

        var content = this.props.data.map(function (item, index) {
            return React.createElement(
                'div', {
                    className: 'tabs-textItem ' + (activeClass === index ? 'show' : '')
                },
                React.createElement(
                    'p',
                    null,
                    item.text
                )
            );
        });

        return React.createElement(
            'div', {
                className: 'tabs-content'
            },
            content
        );
    };

    return TabContent;
}(React.Component);

React.render(React.createElement(Tabs, null), document.querySelector('.tabs'));
