import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setGender } from '../../modules/gender'

import { Button, ButtonGroup } from 'reactstrap';
 
const Gender = props => (
    <ButtonGroup>
        <Button
            onClick={() => props.setGender('female')}>Female</Button>
        <Button
            onClick={() => props.setGender('male')}>Male</Button>
    </ButtonGroup>
)

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setGender
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gender)
