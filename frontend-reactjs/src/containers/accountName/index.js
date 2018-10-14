import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { captureAccountName } from '../../modules/accountName'
 
const AccountName = props => (
    <input
        onChange={props.captureAccountName} />
)

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        captureAccountName
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountName)
