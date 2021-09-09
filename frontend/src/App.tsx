import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import DataTable from 'components/DataTable';

function App() {
  return (
    <>
      <Navbar/>
    
        <div className="container">
    <DataTable/>

       </div>  
     
      <Footer/>
    </>
  );
}

export default App;
