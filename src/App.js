import './App.css';
import Counter from './Components/Counter';
import ErrorBoundary from './Components/ErrorBoundary';
import Form from './Components/Form';
import FRInputParent from './Components/FRInputParent';
import Greet from './Components/Greet';
import Hero from './Components/Hero';
import { Message } from './Components/Message';
import MountingLifeCycleA from './Components/MountingLifeCycleA';
import ParentComponent from './Components/ParentComponent';
import PortalDemo from './Components/PortalDemo';
import RefsDemo from './Components/RefsDemo';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet name="something" > <p>tadaa</p></Greet>
      <Greet name="something1" ><button>Tadaa</button></Greet>
      <Greet name="something3" ><input type="text" placeholder='Tadaa' /></Greet> */}
      {/* <Welcome name="something3"><button>Tadaa</button></Welcome> */}
      {/* <Counter />
      <Message /> */}
      {/* <ParentComponent /> */}
      {/* <Form /> */}
      {/* <MountingLifeCycleA /> */}
      {/* <RefsDemo /> */}
      {/* <FRInputParent /> */}
      {/* <PortalDemo /> */}
      <ErrorBoundary>
        <Hero heroName={'asdasd'} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={''} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
