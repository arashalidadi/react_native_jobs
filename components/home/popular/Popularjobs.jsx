import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const { data , isLoading , error } = useFetch
  ('search',{
    query : 'React Developer',
    num_pages : "1"
  });
 // console.log(data)
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
            data={data}
            renderItem={( {item} ) => (
                <PopularJobCard
                item={item}
                />
            )}
          keyExtractor={item => item.job_id}
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