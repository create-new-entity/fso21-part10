import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

import AuthStorage from './src/utils/authStorage';
import DetailItemStorage from './src/utils/detailItemStorage';

import AuthStorageContext from './src/contexts/AuthStorageContext';
import ItemForDetailsContext from './src/contexts/ItemForDetailsContext';

const authStorage = new AuthStorage();
const detailItemStorage = new DetailItemStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <ItemForDetailsContext.Provider value={detailItemStorage}>
              <Main />
            </ItemForDetailsContext.Provider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;