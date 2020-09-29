import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from './redux/actions';
import { Div, H2 } from '../../theme/typography';
import Button from '../Button';

const Counter = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <Div>
      <H2>
        Count: <span>{count}</span>
      </H2>
      <Button onClick={() => dispatch(incrementCount())}>+1</Button>
      <Button onClick={() => dispatch(decrementCount())}>-1</Button>
      <Button onClick={() => dispatch(resetCount())}>Reset</Button>
    </Div>
  )
}

export default Counter
