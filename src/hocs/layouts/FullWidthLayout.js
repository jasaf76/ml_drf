import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import { connect } from "react-redux";
import Alert from "components/alert";
import { useEffect } from "react";
import { get_network_id, loadWeb3} from "redux/actions/web3";
import { get_my_user_details } from "redux/actions/user";

const FullWidthLayout = ({ children, loadWeb3, get_network_id, my_user, get_my_user_details }) => {
  
  if (window.ethereum) {
    window.ethereum.on('chainChanged', handleChainChanged)
    function handleChainChanged(_chainId){
      window.location.reload()
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("account")) {
        loadWeb3();
        my_user ? <></> : get_my_user_details()
      }
     
    };
    fetchData();
  }, []);
  if (window.ethereum) {
     get_network_id()
   }

  return (
    <div>
      <Navbar />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto">{children}</div>
      </div>

      <Footer />
      <Alert />
    </div>
  );
};

const mapStateToProps = (state) => ({
  my_user: state.user.my_user,
  

});

export default connect(mapStateToProps, {
  loadWeb3,
  get_network_id,
  get_my_user_details
})(FullWidthLayout);
