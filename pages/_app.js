//============== React & Next ================
import "styles/globals.scss";
//============== images & icons ==============
//============== in components ===============
import MainLayout from "layouts/MainLayout";
//============== ex components ===============
//================= redux ====================
import { Provider } from "react-redux";
import store from "redux/store";
//============================================
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
