import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeRoute } from '../../modules/changeRoute'
 
const Home = props => (
  <div>
    <button onClick={() => props.changeRoute('/league-of-legends')}>
      LoL
    </button>
  </div>
)

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeRoute
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
