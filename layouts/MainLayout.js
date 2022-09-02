//============== React & Next ================
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
//============== images & icons ==============
//============== in components ===============
import PageProgress from "components/PageProgressbar/PageProgressbar";
import Navbar from "components/Navbar/Navbar";
//============== ex components ===============
import { Toaster } from "react-hot-toast";
//================= redux ====================
import ThemeSelector from "components/ThemeSelector/ThemeSelector";
//============================================

const MainLayout = ({ children }) => {
  const router = useRouter();
  const [progress, setProgress] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setProgress((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };
    const handleRouteChangeEnd = () => {
      setProgress((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="keywords"
          content="resume,personal portfolio,portfolio,cv,amirhosseinGoodarzi"
        />
        <meta
          name="Description"
          content="resume of an experienced, professional optical Developer looking for work in the Bay area of Iran,Tehran."
        />
      </Head>
      <PageProgress
        isRouteChanging={progress.isRouteChanging}
        key={progress.loadingKey}
      />
      <Navbar />
      {children}
      <ThemeSelector />
      <Toaster position="top-center" />
    </>
  );
};

export default MainLayout;
