import React from 'react';
import AddProfileContainer from './add_profile_container';

class UserShowPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { addPage: false, editPage: false}
        this.showMenu = this.showMenu.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }
    componentDidMount() {
        this.props.fetchProfiles();
    }
    showMenu(e) {
        e.preventDefault();
        this.setState({ addPage: true})
    }
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevStates.entitities.profiles !== this.props.profiles) {

    //     }
    // }

    toggleShow() {
        this.setState({ addPage: false})
    }
    render() {
         const add_button = (this.props.currentUser.profile_ids.length < 5 ? (
                <div>
                    <button onClick={this.showMenu}>
                    <img src="https://i.gyazo.com/a221e2b708b2cee58bca928aede1ec6b.png"/>
                        
                    </button>
                    <button onClick={this.showMenu}> Add Profile</button>
                </div>
            ): ( <div></div> ))
        const profiles = this.props.currentUser.profile_ids.map( (id,idx) => {
            const prof = this.props.profiles[id-1];
            if (prof) {
            return <div key={idx} >
                <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" />
                 <h1> {prof.name} </h1>
            </div>
            }
           
        })
        const show_profiles = (  <div className="profiles-page">
                <h1 className="netflix-text"> Netflix </h1>
                <div className="profiles-header">
                    <h1> Who's watching? </h1>
                </div>
                <div className="profiles-col">
                    {profiles}
                    {add_button}
                </div>
                
            </div>)
        const display = (this.state.addPage ? <AddProfileContainer toggleShow={this.toggleShow} /> : show_profiles)
        return ( 
            <div className="showpage-container">
          {display}
          </div>
        )
    }
}

export default UserShowPage;