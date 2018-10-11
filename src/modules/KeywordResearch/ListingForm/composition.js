import { compose, withStateHandlers } from 'recompose'
import withStatics from 'helpers/statics/set'
import withStyle from './style'
import * as statics from './statics'

const initialBulletpoints = Array.from({ length: 5 }, (value, index) => ({
  id: index
}))

export default compose(
  withStyle,
  withStateHandlers(
    { bulletpoints: initialBulletpoints },
    {
      addBulletpoint: ({ bulletpoints }) => () => ({
        bulletpoints: [...bulletpoints, { id: bulletpoints.length }]
      })
    }
  ),
  withStatics(statics)
)
