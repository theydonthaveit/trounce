import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setAccountName, validateAccountName } from '../../modules/accountName'

import { FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
 
const AccountName = props => (
  <FormGroup>
    <Label for="exampleEmail">Summoner Name</Label>
    <Input
      onChange={props.setAccountName}
      onBlur={props.validateAccountName}
      disabled={props.requestAccountNameValidation}
      valid={props.validAccountName}
      invalid={props.invalidAccountName} />
    <FormFeedback
      valid={props.validAccountName}
      invalid={props.invalidAccountName}>
      {
        props.validAccountName
        ? props.AccountNameFeedbackValid
        : props.AccountNameFeedbackInvalid
      }</FormFeedback>
    <FormText>e.g. DobuleLift</FormText>
  </FormGroup>
)

const mapStateToProps = ({ accountName }) => ({
  requestAccountNameValidation: accountName.requestAccountNameValidation,
  validAccountName: accountName.validAccountName,
  invalidAccountName: accountName.invalidAccountName,
  accountNameFeedbackValid: accountName.accountNameFeedbackValid,
  accountNameFeedbackInvalid: accountName.accountNameFeedbackInvalid
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setAccountName,
      validateAccountName
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountName)
