//import logo from './logo.svg';
import './App.css';
import FormProduct from './components/FormProduct';
import ComNavbar from './components/ComNavbar';


import Footter from './components/Footter';


function App() {

  


  return (

    <div>
      <ComNavbar />
      <br />
      <br />

      {/* <AddProduct /> */}


    


      <FormProduct />

      <br />
      <br />
      <br />
      <div className="flex-col">
      <main className="flex-grow " style={{ padding: '25px' }}>
          {/* Your main content goes here */}
        </main>
        <Footter />
      </div>
    </div>

  );
}

export default App;
