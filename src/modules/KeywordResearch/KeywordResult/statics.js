import PropTypes from 'prop-types'

export const displayName = 'Modules/KeywordResearch/KeywordResult'

export const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  updateKeywordsSelected: PropTypes.func.isRequired
}
