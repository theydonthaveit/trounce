import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { setPostcode } from '../../modules/region'
 
const Dropdown = props => (
  <div>
    <p>
        <select>
            {props.regions.map(
                (region, indx) =>
                    <option value={region}>{region}</option>
            )}
        </select>
    </p>
  </div>
)

const mapStateToProps = ({ region }) => ({
    regions: ['euw', 'na', 'lck', 'lpl']
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown)
