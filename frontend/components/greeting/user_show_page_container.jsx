import {connect} from 'react-redux';
import { fetchProfiles } from '../../actions/profile_actions';
import UserShowPage from './user_show_page';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        profiles: state.entities.profiles
    }
}
const mDTP = dispatch => ({
    fetchProfiles: () => dispatch(fetchProfiles())
})

export default connect(mSTP, mDTP)(UserShowPage);