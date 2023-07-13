import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Plus , Minus } from "./actions/index";

function App() {

  const dispatch = useDispatch();

  const count = useSelector((state)=> state.PlusMinus);

  return (
    <>
      <div className='number'>
          <a className="minus" onClick={ () => dispatch(Minus())}>-</a>
          <input type="text" className='counter' value={count}/>
          <a className='plus' onClick={() => dispatch(Plus())}>+</a>
      </div>
    </>                                      
  );
}

export default App;
