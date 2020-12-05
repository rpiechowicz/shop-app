import { combineReducers } from 'redux'
import shop from './shop.reducer'
import user from './user.reducer'

const rootReducer = combineReducers({ shop, user })

export default rootReducer
