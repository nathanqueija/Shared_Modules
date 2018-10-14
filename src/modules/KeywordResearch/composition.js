import { compose, setStatic } from 'recompose'
import KeywordSearch from 'modules/KeywordResearch/KeywordSearch'
import KeywordList from 'modules/KeywordResearch/KeywordList'
import ListingForm from 'modules/KeywordResearch/ListingForm'
import withStatics from 'helpers/statics/set'
import withStyle from './style'
import * as statics from './statics'

export default compose(
  setStatic('Search', KeywordSearch),
  setStatic('KeywordList', KeywordList),
  setStatic('ListingForm', ListingForm),
  withStyle,
  withStatics(statics)
)
