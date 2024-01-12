import { View, Text, SafeAreaView, Image, TextInput, TextInputComponent, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import Categories from '../components/Categorie';
import FeaturedRow from '../components/FeaturedRow';
import RestaurantCard from '../components/RestaurantCard';



const HomeScreen = () => {

    const navigation = useNavigation();
    //bsh l header tji far8a
    useLayoutEffect (() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
  return (
    //SafeAreaView t5ali l partie l foganiya w loutaniya far8a fil affichage f tel
      <SafeAreaView className = "bg-white pt-5">
        {/* Header*/}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
                source={{
                    uri: "https://links.papareact.com/wru"
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            {/* flex-1 bsh ta3ti l espace lkol l deliver w location*/}
            <View className = "flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>
            <UserIcon size={35}  color="#00CCBB"/>
        </View>
        {/* search */}
        <View className = "flex-row item-center space-x-2 p-2 mx-4 px-4">
            <View className = "flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput
                     placeholder='Restaurants and cuisines'
                     keyboardType='default'
                    />
             </View>
            <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>

        {/* body */}

        <ScrollView>

            {/* categories */}

               <Categories/>
            {/* featured rows */}

            <FeaturedRow 
                id="123"
                title="Featured"
                description="Paid placements from our partners"
                
            />

            <FeaturedRow 
                id="234"
                title="Tasty Discounts"
                description="Everyone's been enjoying these juicy discounts!"
                
            />

            <FeaturedRow 
                id="456"
                title="offers near you!"
                description="why not suppory your local restaurant tonight"
                
            />

            {/* RestaurantCard */}

            <RestaurantCard
                
            />
        </ScrollView>
       </SafeAreaView>
  );
};

export default HomeScreen;