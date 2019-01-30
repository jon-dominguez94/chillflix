import { connect } from "react-redux";
import Footer from "./footer";

const mstp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

export default connect(mstp)(Footer);
