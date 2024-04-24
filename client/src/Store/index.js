import { configureStore } from '@reduxjs/toolkit'
import clientSlice from '../Features/clientSlice'

export default configureStore({
    reducer:{
        client: clientSlice
    }
})