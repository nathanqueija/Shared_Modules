import PropTypes from 'prop-types'

export const displayName = 'Modules/KeywordResearch'

export const propTypes = {
  items: PropTypes.array.isRequired,
  teste: PropTypes.bool.isRequired
}

export const defaultProps = {
  items: [],
  teste: false
}
