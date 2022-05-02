import { createStore } from 'tooljs-web'
import reducer from './reducer'

export const { connectStore, createRoot, useDispatch, useSelector } = createStore(reducer);