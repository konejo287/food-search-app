
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsshowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsshowScreen
  }, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Busines Search'
    }
});

export default createAppContainer(navigator);