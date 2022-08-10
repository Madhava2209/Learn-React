import './App.css';
import Counter from './Components/Counter';
import ErrorBoundary from './Components/ErrorBoundary';
import Form from './Components/Form';
import FRInputParent from './Components/FRInputParent';
import Greet from './Components/Greet';
import Hero from './Components/Hero';
import ClickCounter from './Components/HigherOrderComponents/ClickCounter';
import HoverCounter from './Components/HigherOrderComponents/HoverCounter';
import CounterContainer from './Components/Hook-useEffect/CounterContainer';
import CounterUseEffect from './Components/Hook-useEffect/CounterUseEffect';
import HookCounter from './Components/Hook-useState/HookCounter';
import { Message } from './Components/Message';
import MountingLifeCycleA from './Components/MountingLifeCycleA';
import ParentComponent from './Components/ParentComponent';
import PortalDemo from './Components/PortalDemo';
import RefsDemo from './Components/RefsDemo';
import RenderPropsClickCounter from './Components/RenderProps/RenderPropsClickCounter';
import RenderPropsHoverCounter from './Components/RenderProps/RenderPropsHoverCounter';
import RenderWithCounter from './Components/RenderProps/RenderWithCounter';
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
      {/* <ErrorBoundary>
        <Hero heroName={'asdasd'} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={''} />
      </ErrorBoundary> */}
      {/* <ClickCounter />
      <HoverCounter />
      <RenderWithCounter>
        {(count, incrementCount) =>(
          <RenderPropsClickCounter count={count} incrementCount={incrementCount} />
        )}
      </RenderWithCounter>
      <RenderWithCounter>
        {(count, incrementCount) =>(
          <RenderPropsHoverCounter count={count} incrementCount={incrementCount} />
        )}
      </RenderWithCounter> */}
      {/* <HookCounter /> */}
      {/* <CounterUseEffect /> */}
      <CounterContainer />
    </div>
  );
}

export default App;
