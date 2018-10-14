import PropTypes from 'prop-types'

export const displayName = 'Modules/KeywordResearch/ResultsMessage'
export const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired
}

export const defaultProps = {
  messages: []
}
