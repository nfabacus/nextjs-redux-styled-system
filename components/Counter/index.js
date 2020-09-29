import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from './redux/actions'
import Button from '../Button';

const Counter = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <Button color="text" bg="primary" onClick={() => dispatch(incrementCount())}>+1</Button>
      <Button onClick={() => dispatch(decrementCount())}>-1</Button>
      <Button onClick={() => dispatch(resetCount())}>Reset</Button>
    </div>
  )
}

export default Counter
