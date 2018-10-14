import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setRegion } from '../../modules/region'

import { FormGroup, Label, Input } from 'reactstrap';
 
const Dropdown = props => (
  <FormGroup
    onChange={props.setRegion}>
    <Label for="exampleSelect">Select</Label>
    <Input type="select" name="select" id="exampleSelect">
      {props.regions.map(
          (region, indx) =>
            <option
              key={indx}
              value={region}>
              {region.toUpperCase()}
            </option> )}
    </Input>
  </FormGroup>
)

const mapStateToProps = ({ region }) => ({
  regions: region.regions
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setRegion
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown)
