import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { verifyUser } from '../redux/login';

/* -----------------    COMPONENT     ------------------ */

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onLoginSubmit}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
                <label>password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  required
                />
            </div>
            <button type="submit" className="btn btn-block btn-primary">{message}</button>
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  onLoginSubmit(event) {
    const { message } = this.props;
    event.preventDefault();

    this.props.loginHelper({ email: event.target.email.value, password: event.target.password.value });

    console.log('~~~ email: ', event.target.email.value)
    console.log('~~~ pw: ', event.target.password.value)
    console.log(`${message} isn't implemented yet`);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({ message: 'Log in' });
const mapDispatch = (dispatch) => {
  return { loginHelper: user => dispatch(verifyUser(user)) }
};

export default connect(mapState, mapDispatch)(Login);
