import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {icons, Images, COLORS, SIZES} from '../Contants';

const ItemDetail = ({route, navigation}) => {
  // Render
  function renderHeader() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          marginHorizontal: SIZES.padding,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
            onPress={() => console.log('mnu on clikd')}>
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
            style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
            onPress={() => console.log('mnu on clikd')}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightgray,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderInfo() {
    let {ItemInfo} = route.params;
    if (ItemInfo) {
      return (
        <ImageBackground
          source={ItemInfo.image}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}>
          {renderHeader()}
          {/* product tag */}
          <View
            style={{
              position: 'absolute',
              top: '45%',
              left: '15%',
              borderRadius: 80,
              backgroundColor: COLORS.transparentLightGray1,
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: COLORS.blue,
                height: 10,
                width: 10,
              }}></View>
          </View>

          <View
            style={{
              position: 'absolute',
              top: '43%',
              left: '30%',
              padding: SIZES.radius * 1.5,
              backgroundColor: COLORS.transparentLightGray1,
              width: '50%',
              borderRadius: 10,
            }}>
            <View style={{flex: 2}}>
              <Text style={COLORS.darkgray}>{ItemInfo.productName}</Text>
            </View>
            <View
              style={{
                flex: 1.5,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: COLORS.darkGreen}}>
                ${ItemInfo.price.toFixed(2)}
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: '20%',
              left: SIZES.padding,
              right: SIZES.padding,
            }}>
            <Text style={{color: COLORS.lightgray3}}>Furniture</Text>
            <Text style={{color: COLORS.gray, fontSize: 26, fontWeight: '900'}}>
              {ItemInfo.productName}
            </Text>
          </View>
        </ImageBackground>
      );
    } else {
      <View></View>;
    }
  }
  function renderFooter() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: '5%',
          left: SIZES.padding,
          right: SIZES.padding,
          flexDirection: 'row',
          height: 70,
          backgroundColor: COLORS.white,
          borderRadius: 35,
        }}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Image
              source={icons.dashbord}
              style={{
                tintColor: COLORS.gray,
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: COLORS.primary,
            }}>
            <Image
              source={icons.add}
              style={{height: 20, width: 20, tintColor: COLORS.white}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Image
              source={icons.person}
              style={{
                tintColor: COLORS.gray,
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {renderInfo()}
      {renderFooter()}
    </View>
  );
};

export default ItemDetail;
