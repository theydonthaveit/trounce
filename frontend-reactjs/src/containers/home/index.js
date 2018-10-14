import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
 
const Home = props => (
  <div>
    <button onClick={() => props.changePage()}>
      LoL
    </button>
  </div>
)

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/league-of-legends')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
