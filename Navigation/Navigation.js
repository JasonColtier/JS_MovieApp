import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import PageSearch from '../Pages/PageSearch'
import FilmDetail from '../Components/FilmDetail'
import PageFavorites from '../Pages/PageFavorites'
import PageHome from '../Pages/PageHome'
import PageCalendar from '../Pages/PageCalendar'
import { Image, StyleSheet } from 'react-native'
import React from 'react'

const SearchNavigator = createStackNavigator({

    PageSearch: {
        screen: PageSearch,
    },
    FilmDetail: {
        screen: FilmDetail,
    }

});

const FavoritesStackNavigator = createStackNavigator({
   
    PageFavorites: {
        screen: PageFavorites,
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const HomeStackNavigator = createStackNavigator({
    PageHome: {
        screen: PageHome,
    },
    FilmDetail: {
        screen: FilmDetail
    }
})
const CalendarStackNavigator = createStackNavigator({
    PageCalendar: {
        screen: PageCalendar,
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const MoviesTabNavigator = createBottomTabNavigator(
    {
        Search: {
            screen: SearchNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../assets/Search.png')}
                        style={styles.icon} />
                }
            }
        },
        Favorites: {
            screen: FavoritesStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../assets/Favoris.png')}
                        style={styles.icon} />
                }
            }
        },
        Home: {
            screen: FavoritesStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../assets/Favoris.png')}
                        style={styles.icon} />
                }
            }
        },
        Calendar: {
            screen: FavoritesStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../assets/Favoris.png')}
                        style={styles.icon} />
                }
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeBackgroundColor: '#A2273C',
            inactiveBackgroundColor: '#fff'

        }
    }
)

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
export default createAppContainer(MoviesTabNavigator) 