import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dropdown from '../dropdown'
import AccountName from '../accountName'
import Postcode from '../postcode'

import { Form } from 'reactstrap';
 
const LeagueOfLegends = props => (
  <Form>
    <Dropdown />
    <Postcode />
    <AccountName />
  </Form>
)

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueOfLegends)
