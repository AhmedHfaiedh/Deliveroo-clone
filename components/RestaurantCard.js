import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'
import { MapPin } from '@nandorojo/heroicons/24/solid'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    dishes,
    lat,
    short_description,
    long,
}) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
            uri:imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={20}/>
            <Text className="text-gray-500 text-xs">
                <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <MapPin color="gray" opacity={0.4} size={22}/>
            <Text className="text-xs text-gray-500">Near By . {address}</Text> 
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard