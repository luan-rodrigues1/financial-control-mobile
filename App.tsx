import Routes from './src/routes';
import UserProvider from './src/contexts/UserContext';
import Toast from 'react-native-toast-message';
import toastConfig from './src/toast';



export default function App() {
  return (
    <>
      <UserProvider>    
        <Routes/>
      </UserProvider>
      <Toast config={toastConfig}/>
    </>
    )

}


