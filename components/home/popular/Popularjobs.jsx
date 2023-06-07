import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from "../../common/cards/popular/PopularJobCard";


const Popularjobs = () => {
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
     <View style={styles.header}>
       <Text style={styles.headerTitle}>
         Popular Jobs
       </Text>
       <TouchableOpacity>
        <Text style={styles.headerBtn} >
        show all
        </Text>
       </TouchableOpacity>
     </View>
        <View style={styles.cardsContainer}>
           {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />

           ) : error ? (
           <Text>Somting went wrong</Text>
           ) : (
            <FlatList 
            data={[1,2,3,4,5,6,7,8,9]}
            renderItem={( {item} ) => (
                <PopularJobCard
                item={item}
                />
            )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap : SIZES.medium }}
          horizontal
            />
           )
          }
        </View>

    </View>
  )
}

export default Popularjobs