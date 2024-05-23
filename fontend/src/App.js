//import logo from './logo.svg';
import './App.css';
import FormProduct from './components/FormProduct';
import ComNavbar from './components/ComNavbar';

import Swal from 'sweetalert2';
import Footter from './components/Footter';


function App() {

  const handleClick = () => {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonText: 'Cool'
    });
  };


  return (

    <div>
      <ComNavbar />
      <br />
      <br />

      {/* <AddProduct /> */}


      <button onClick={handleClick}>Click me</button>


      <FormProduct />

      <br />
      <br />
      <br />
      <div className="flex-col">
      <main className="flex-grow " style={{ padding: '15px' }}>
          {/* Your main content goes here */}
        </main>
        <Footter />
      </div>
    </div>

  );
}

export default App;
