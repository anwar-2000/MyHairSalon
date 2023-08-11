import SearchSalonsWithLocations from '@/Components/SearchSalonsWithLocations'
import { fetchSalons } from '@/utils/salonHelpers';
import React from 'react'


const Index = async () => {
      const data = await fetchSalons();
      //console.log(data)
  return <div>
    <SearchSalonsWithLocations salons={data} />
  </div>
}

export default Index