import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: false }
        this.showMenu = this.showMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({
            showMenu: true
        }
    ,() => {document.addEventListener('click', this.closeMenu);
    })
    }

    closeMenu() {
        this.setState({showMenu: false}), () => {
            document.removeEventListener('click', this.closeMenu)
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    {this.props.btntext}
                </button>

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