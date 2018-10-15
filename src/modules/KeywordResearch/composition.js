import { compose, setStatic, withStateHandlers } from 'recompose'
import KeywordSearch from 'modules/KeywordResearch/KeywordSearch'
import KeywordList from 'modules/KeywordResearch/KeywordList'
import ListingForm from 'modules/KeywordResearch/ListingForm'
import isArray from 'lodash/isArray'
import unionBy from 'lodash/unionBy'
import differenceBy from 'lodash/differenceBy'
import withStatics from 'helpers/statics/set'
import withStyle from './style'
import * as statics from './statics'

export default compose(
  setStatic('Search', KeywordSearch),
  setStatic('KeywordList', KeywordList),
  setStatic('ListingForm', ListingForm),
  withStateHandlers(
    { keywordsSelected: [] },
    {
      updateKeywordsSelected: ({ keywordsSelected }, { results }) => (
        values,
        removeValues
      ) => {
        const idsSelected = isArray(values) ? values : [values]
        const keywordsToUpdate = results.filter(
          ({ id }) => idsSelected.indexOf(id) !== -1
        )

        return {
          keywordsSelected: removeValues
            ? differenceBy(keywordsSelected, keywordsToUpdate, 'id')
            : unionBy(keywordsSelected, keywordsToUpdate, 'id')
        }
      }
    }
  ),
  withStyle,
  withStatics(statics)
)
