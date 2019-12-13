import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const Bird = props => {
  const { Component, pageProps, store } = props;
  return (
    <Provider store={store}>
      <Head>
        <title>Bird SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

Bird.propTypes = {
  Page: PropTypes.elementType,
  pageProps: PropTypes.object
}

export default withRedux((initialState, options) => {
  console.log(options.isServer);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);
  return store;
})(Bird);