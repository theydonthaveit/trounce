import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
 
const Trounce = props => (
  <div>
    <button onClick={() => props.changePage()}>
      trounce
    </button>
  </div>
)

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/trounce')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trounce)