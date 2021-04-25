import './App.scss'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@/store'
import { basename } from '@/utils/global'

import Layout from './layout'

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename={basename}>
          <Layout />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
