import { combineReducers } from 'redux'
import shop from './shop.reducer'
import user from './user.reducer'
import common from './common.reducer'

const rootReducer = combineReducers({ shop, user, common })

export default rootReducer
