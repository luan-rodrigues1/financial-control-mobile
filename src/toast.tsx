import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const toastConfig = {
    success: (props: any) => (
        <BaseToast
          {...props}
          style={{ borderLeftColor: '#54C17F' }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          text1Style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: "#54C17f"
          }}
        />
    ),
}

export default toastConfig