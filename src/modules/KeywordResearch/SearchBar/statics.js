import PropTypes from 'prop-types'

export const displayName = 'Modules/KeywordResearch/SearchBar'

export const propTypes = {
  masks: PropTypes.arrayOf(PropTypes.string).isRequired
}

export const defaultProps = {
  masks: ['Regular', 'Extended', 'ASIN']
}
