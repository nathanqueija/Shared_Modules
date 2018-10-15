import { compose, setStatic, withStateHandlers, withProps } from 'recompose'
import KeywordSearch from 'modules/KeywordResearch/KeywordSearch'
import KeywordList from 'modules/KeywordResearch/KeywordList'
import ListingForm from 'modules/KeywordResearch/ListingForm'
import isArray from 'lodash/isArray'
import isUndefined from 'lodash/isUndefined'
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
    {
      keywordsSelected: [],
      keywordsOmmited: []
    },
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
      },
      updateKeywordsOmmited: ({ keywordsOmmited }) => id => ({
        keywordsOmmited: isUndefined(id)
          ? []
          : unionBy(keywordsOmmited, [{ id }], 'id')
      })
    }
  ),
  withProps(({ results, keywordsSelected }) => ({
    results: differenceBy(results, keywordsSelected, 'id')
  })),
  withProps(({ results, keywordsOmmited }) => ({
    results: differenceBy(results, keywordsOmmited, 'id')
  })),
  withStyle,
  withStatics(statics)
)
