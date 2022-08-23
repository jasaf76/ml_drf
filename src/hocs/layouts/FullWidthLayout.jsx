import Navbar from 'components/navigations/Navbar'
import Footer from 'components/navigations/Footer'
import {connect} from 'react-redux'
import Alert from 'components/alert'

const FullWidthLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
      <Alert/>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  
})(FullWidthLayout)
