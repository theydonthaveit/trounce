import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setPostcode, validatePostcode } from '../../modules/postcode'

import { FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
 
const Postcode = props => (
  <FormGroup>
    <Label for="exampleEmail">Valid input</Label>
    <Input
      onChange={props.setPostcode}
      onBlur={props.validatePostcode}
      disabled={props.requestPostcodeValidation}
      valid={props.validPostcode}
      invalid={props.invalidPostcode} />
    <FormFeedback
      valid={props.validPostcode}
      invalid={props.invalidPostcode}>
      {
        props.validPostcode
        ? props.postcodeFeedbackValid
        : props.postcodeFeedbackInvalid
      }</FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
  </FormGroup>
)

const mapStateToProps = ({ postcode }) => ({
    requestPostcodeValidation: postcode.requestPostcodeValidation,
    validPostcode: postcode.validPostcode,
    invalidPostcode: postcode.invalidPostcode,
    postcodeFeedbackValid: postcode.postcodeFeedbackValid,
    postcodeFeedbackInvalid: postcode.postcodeFeedbackInvalid
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setPostcode,
      validatePostcode
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Postcode)
