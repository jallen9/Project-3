'use strict';

const e = React.createElement;

class HeaderArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement('header', { className: "header_sticky" },
            React.createElement('div', { className: "container" },
                React.createElement('div', { className: "row" },
                    React.createElement('div', { className: "col-lg-3 col-6" },
                        React.createElement('div', { className: "logo_home" },
                            React.createElement('h3', { onClick: function () { location.href = '/web/home' } }, "CannaberProviders")
                        )
                    )
                )
            )
        );
    }s
}

ReactDOM.render(React.createElement(HeaderArea, null, null), document.getElementById('headerArea'));