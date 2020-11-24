import {connect} from 'react-redux';
import { fetchProfiles } from '../../actions/profile_actions';
import UserShowPage from './user_show_page';
import {Logout} from '../../actions/profile_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        profiles: state.entities.profiles
    }
}
const mDTP = dispatch => ({
    fetchProfiles: () => dispatch(fetchProfiles()),
    Logout: () => () => dispatch(Logout())
})

export default connect(mSTP, mDTP)(UserShowPage);