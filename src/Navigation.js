import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, PlaceDetails, VisitedPlaces } from './Screens';
import { Linking } from 'react-native';
import { places } from './Config/AppData';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
      <Stack.Screen name="VisitedPlaces" component={VisitedPlaces} />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  const navigatorRef = React.useRef(null);

  const  _handleOpenURL = (event) => {
    
    const url = event?.url ?? event;
    const id = url?.split('place/')[1];

    

    setTimeout(()=>{
        if(id){
          const index = places.findIndex(place => place.id == id);
          navigatorRef?.current?.navigate("PlaceDetails", {identifier: index, from: "Home"});
          
        }
      },1000);

    
  }

  React.useEffect(() => {
      Linking.getInitialURL().then((ev) => {
        if (ev) {
          _handleOpenURL(ev);
        }
      }).catch(err => {
          console.warn('An error occurred', err);
      });
  
      Linking.addEventListener('url', _handleOpenURL);
  
      return ()=> {
      Linking.removeEventListener('url', _handleOpenURL);
      }
    
  }, []);

  return (
    <NavigationContainer ref={navigatorRef}>
        <StackNavigator />
    </NavigationContainer>
  )
}

export default Navigation;