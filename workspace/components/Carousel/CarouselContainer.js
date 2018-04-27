import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView ,Dimensions} from 'react-native';
import LinearGradient from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
//import { sliderWidth, itemWidth } from './styles';
import SliderEntry from './Carousel';
import styles from './styles';
//import { colors, sliderWidth, itemWidth} from './styles';
import {  ENTRIES2 } from './staticInfo';
import { scrollInterpolators, animatedStyles } from './animation';
import {getCurrentTour} from '../../actions/TourPage';
import { connectAlert } from '../Alert';
import { connect } from 'react-redux';
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },

];

const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
}; 

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.7;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

class CarouselContainer extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            isTourCarousel: this.props.isTourCarousel,
            title: this.props.title
        };
    }

    

    _renderItem ({item, index}) {
        return <SliderEntry  data={item} even={(index + 1) % 2 === 0} isTourCarousel= {false}/>;
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }
    getTour = (data) => {
      
      
      
    }

	_renderTourItem = ({item, index}) => {

       // console.log("---------------------",this.props.tours);
       //this.props.dispatch(getCurrentTour(item));
       //this.props.getTour(item.info)

        return <SliderEntry  data={item} even={(index + 1) % 2 === 0} isTourCarousel= {true}/>;
    }

    _renderLightItem ({item, index}) {
        return <SliderEntry data={item} even={false} />;
    }

    _renderDarkItem ({item, index}) {
        return <SliderEntry data={item} even={true} />;
    }

  

    mainExample (number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>{`Example ${number}`}</Text>
                <Text style={styles.subtitle}>{title}</Text>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }

    momentumExample (number, title) {
        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>{`Example ${number}`}</Text>
                <Text style={styles.subtitle}>{title}</Text>
                <Carousel
                  data={ENTRIES2}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                />
            </View>
        );
    }

    layoutExample (number, title, type, isTourCarousel, headline, entries, location) {
        const isTinder = type === 'tinder';
       // const tryThis = this.props.dispatch(getCurrentTour(entries[0]))
        return (
            <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                <Text style={[styles.bigTitle, isTinder ? {} : styles.titleDark]}>MY {headline}</Text>
                <Text style={[styles.bigSubtitle, isTinder ? {} : styles.titleDark]}>{location}</Text>
              
                <Carousel
                  data={entries}
                  renderItem={isTourCarousel ? this._renderTourItem : this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={type}
                  loop={true}
                />
            </View>
        );
    }

    customExample (number, title, refNumber, renderItemFunc) {
        const isEven = refNumber % 2 === 0;

        // Do not render examples on Android; because of the zIndex bug, they won't work as is
        return !IS_ANDROID ? (
            <View style={[styles.exampleContainer, isEven ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                <Text style={[styles.title, isEven ? {} : styles.titleDark]}>{`Example ${number}`}</Text>
                <Text style={[styles.subtitle, isEven ? {} : styles.titleDark]}>{title}</Text>
                <Carousel
                  data={isEven ? ENTRIES2 : ENTRIES1}
                  renderItem={renderItemFunc}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  scrollInterpolator={scrollInterpolators[`scrollInterpolator${refNumber}`]}
                  slideInterpolatedStyle={animatedStyles[`animatedStyles${refNumber}`]}
                  useScrollView={true}
                />
            </View>
        ) : false;
    }

    get gradient () {
        return (
            <LinearGradient
              colors={[colors.background1, colors.background2]}
              startPoint={{ x: 1, y: 0 }}
              endPoint={{ x: 0, y: 1 }}
              style={styles.gradient}
            />
        );
    }

    render () {
        //const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        //const example2 = this.momentumExample(2, 'Momentum | Left-aligned | Active animation');

        const example3 = this.layoutExample(3, '"Stack of cards" layout | Loop', 'stack', this.state.isTourCarousel, this.state.title, this.props.data, this.props.location);
       
        //const example4 = this.layoutExample(4, '"Tinder-like" layout | Loop', 'tinder');
        //const example5 = this.customExample(5, 'Custom animation 1', 1, this._renderItem);
        //const example6 = this.customExample(6, 'Custom animation 2', 2, this._renderLightItem);
        //const example7 = this.customExample(7, 'Custom animation 3', 3, this._renderDarkItem);
        //const example8 = this.customExample(8, 'Custom animation 4', 4, this._renderLightItem);

        return (
           <SafeAreaView style={styles.safeArea}>

                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                  
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >
                       
                        { example3 }
                        
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    
       
    }

}


 export default connect()(connectAlert(CarouselContainer));
