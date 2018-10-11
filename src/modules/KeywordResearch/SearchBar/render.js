import React from 'react'
import SearchMask from 'modules/KeywordResearch/SearchMask'
import CountryPicker from 'modules/KeywordResearch/CountryPicker'

export default ({ className }) => (
  <form className={className}>
    <SearchMask />
    <CountryPicker />
    <input type="text" />
    <label htmlFor="exclude-permutations">
      <input
        type="checkbox"
        id="exclude-permutations"
        name="permutations"
        value="Bike"
      />
      Exclude Permutations
    </label>
  </form>
)
