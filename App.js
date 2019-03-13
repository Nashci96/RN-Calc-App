import { createStackNavigator , createAppContainer} from 'react-navigation';

import Calcu from './calc';

const Kalculator = createStackNavigator({
  calcu : { screen: Calcu},
});

const App = createAppContainer(Kalculator);

export default App;