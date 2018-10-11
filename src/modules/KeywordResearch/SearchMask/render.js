import React from 'react'

export default ({ className }) => (
  <div className={className}>
    <label htmlFor="regular">
      Regular
      <input type="radio" name="mask" id="regular" value="regular" />
    </label>
    <label htmlFor="extended">
      Extended
      <input type="radio" name="mask" id="extended" value="extended" />
    </label>
    <label htmlFor="asin">
      ASIN
      <input type="radio" name="mask" id="asin" value="asin" />
    </label>
  </div>
)
