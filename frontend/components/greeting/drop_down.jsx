import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: false };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({showMenu: true})
     }
    closeMenu(e) {
        e.preventDefault();
        this.setState({showMenu: false})
    }
    render() {
        return (
            <div>
                <div>
                <button onClick={this.showMenu}>
                    {this.props.btntext}  
                </button>
                 <button onClick={this.closeMenu}> - </button>
                </div>

                {
                    this.state.showMenu ? (
                        <div className="menu">
                            <p> {this.props.showtext} </p>
                        </div>
                    ) : (
                        null
                    )
                }
                 </div>
        )
    }
}

export default DropDown;