import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setPostcode, validatePostcode } from '../../modules/postcode'
 
const Home = props => (
  <div>
    <h1>Home</h1>
    <p>
      <input
        onChange={props.setPostcode}
        onBlur={props.validatePostcode}
        disabled={props.requestPostcodeValidation} />
    </p>
    <p>{props.validPostcode}</p>
    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
)

const mapStateToProps = ({ postcode }) => ({
    requestPostcodeValidation: postcode.requestPostcodeValidation,
    validPostcode: postcode.validPostcode
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setPostcode,
      validatePostcode,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
