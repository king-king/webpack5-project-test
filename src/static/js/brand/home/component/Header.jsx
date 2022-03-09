import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return (
            <div>
                header
            </div>
        );
    }
}
Header.propTypes = {
};
export default Header;
