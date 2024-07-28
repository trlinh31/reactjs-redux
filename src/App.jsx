import Routes from "@/routes/Routes";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import { selectLoading } from "./redux/features/loading/loadingSelectors";
import ShoppingCartModal from "./components/ShoppingCartModal";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <Routes />
      <Toaster />
      <ShoppingCartModal />
      {isLoading && <Loading />}
    </>
  );
}

export default App;
