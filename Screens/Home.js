import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {icons, Images, COLORS, SIZES} from '../Contants';

import Drawer from './Drawer';

const ScrollableTab = ({tabList, selectedTab, onPress}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{marginHorizontal: SIZES.padding}}
      onPress={() => onPress(item)}>
      <Text style={{color: COLORS.secondary, fontWeight: '600'}}>
        {item.name}
      </Text>
      {selectedTab.id == item.id && (
        <View style={{alignItems: 'center', marginTop: SIZES.base}}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: COLORS.blue,
            }}></View>
        </View>
      )}
    </TouchableOpacity>
  );
  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const ScrollableCard = ({navigation, productList}) => {
  const renderCard = ({item}) => (
    <TouchableOpacity
      style={{marginLeft: SIZES.padding}}
      onPress={() => navigation.navigate('ItemDetail', {ItemInfo: item})}>
      <View style={{width: SIZES.width / 2}}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.radius * 2,
          }}
        />
        <View
          style={{position: 'absolute', top: 15, left: '10%', right: '10%'}}>
          <Text style={{color: COLORS.lightgray2}}>Furniture</Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.lightgray2,
              fontSize: 20,
              fontWeight: '700',
            }}>
            {item.productName}
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            left: 30,
            borderRadius: 15,
            paddingVertical: 14,
            paddingHorizontal: 15,
            backgroundColor: COLORS.transparentLightGray,
          }}>
          <Text>$ {item.price.toFixed(2)} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList}
        renderItem={renderCard}
        keyExtractor={item => item.productId}
      />
    </View>
  );
};

const Home = ({navigation}) => {
  const [tabList, setTabList] = React.useState([
    {
      id: 0,
      name: 'chair',
      title: 'chairs',
      productList: [
        {
          productId: 1,
          productName: 'chair Green Color',
          price: 10.0,
          image: Images.yellowchair,
        },
        {
          productId: 2,
          productName: 'chair dark blue Color2',
          price: 10.0,
          image: Images.darkbluechair,
        },
        {
          productId: 3,
          productName: 'chair lightyellow Color',
          price: 10.0,
          image: Images.lightyellowchair,
        },
      ],
    },
    {
      id: 1,
      name: 'Cupboard',
      title: 'Cupboards',
      productList: [
        {
          productId: 4,
          productName: 'product 4',
          price: 10.0,
          image: Images.yellowchair,
        },
        {
          productId: 5,
          productName: 'product 4',
          price: 10.0,
          image: Images.yellowchair,
        },
        {
          productId: 6,
          productName: 'product 4',
          price: 10.0,
          image: Images.yellowchair,
        },
      ],
    },
    {
      id: 2,
      name: 'Table',
      title: 'Tables',
      productList: [
        {
          productId: 7,
          productName: 'product 7',
          price: 10.0,
          image: Images.yellowchair,
        },
        {
          productId: 8,
          productName: 'product 8',
          price: 10.0,
          image: Images.yellowchair,
        },
        {
          productId: 9,
          productName: 'product 9',
          price: 10.0,
          image: Images.yellowchair,
        },
      ],
    },
    {
      id: 3,
      name: 'Accessories',
      title: 'accessories',
      productList: [
        {
          productId: 4,
          productName: 'product 10',
          price: 10.0,
          image: Images.yellowchair,
        },
        {
          productId: 5,
          productName: 'product 11',
          price: 10.0,
          image: Images.yellowchair,
        },
        {
          productId: 6,
          productName: 'product 12',
          price: 10.0,
          image: Images.yellowchair,
        },
      ],
    },
  ]);

  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: 'chair',
    title: 'chairs',
    productList: [
      {
        productId: 1,
        productName: 'chair Green Color',
        price: 10.0,
        image: Images.yellowchair,
      },
      {
        productId: 2,
        productName: 'chair dark blue color',
        price: 10.0,
        image: Images.darkgreenchair,
      },
      {
        productId: 3,
        productName: 'chair lightYellow Color',
        price: 10.0,
        image: Images.lightyellowchair,
      },
    ],
  });

  //Render
  function renderHeader() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          marginVertical: 34,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1}} onPress={() => Drawer()}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{flex: 1, alignItems: 'flex-end'}}
            onPress={() => console.log('Anandu')}>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //rendr title

  function rederTitle(title) {
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding,
          marginVertical: -22,
        }}>
        <Text style={{color: COLORS.black, fontSize: 34, fontWeight: '700'}}>
          Colletion of{' '}
        </Text>
        <Text style={{color: COLORS.black, fontSize: 34, fontWeight: '700'}}>
          {title}
        </Text>
      </View>
    );
  }
  function renderPromotionCard() {
    return (
      <View
        style={[
          styles.shadow,
          {
            flexDirection: 'row',
            marginHorizontal: SIZES.padding,
            padding: SIZES.radius,
            height: 100,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            marginTop: 22,
          },
        ]}>
        <View
          style={{
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.lightgray2,
            borderRadius: 20,
          }}>
          <Image
            source={Images.yellowchair}
            resizeMode="contain"
            style={{
              width: '60%',
              height: '60%',
            }}
          />
        </View>
        {/* wording section */}
        <View
          style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{}}>Special offer</Text>
          <Text>Adding to your cart</Text>
        </View>
        {/* Button */}
        <View
          style={{
            marginRight: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              height: '70%',
              width: 40,
              borderRadius: 10,
            }}
            onPress={() => {
              console.log('promo on clicked');
            }}>
            <Image
              source={icons.riqht}
              resizeMode="contain"
              style={{
                height: '50%',
                width: '50%',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
        translucent
      />
      {renderHeader()}
      {rederTitle(selectedTab.title)}

      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={item => setSelectedTab(item)}
      />
      <View style={{flex: 1}}>
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>
      {/* footer - portion card */}
      <View style={{height: '19%'}}>{renderPromotionCard()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default Home;
