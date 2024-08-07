import { getStorageCity, removeStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

const newCity: CityProps = {
  id: '1',
  name:'São Paulo',
  latitude: 123,
  longitude: 456
}

describe("Storage: CityStorage", () => {
    it("should be returned null when there is no city in storage", async () => {

        const response = await getStorageCity()

        expect(response).toBeNull()
    })

    it('should be returned city storaged', async () => {
    
        await saveStorageCity(newCity)
    
        const response = await getStorageCity()
    
        expect(response).toEqual(newCity)
      })

      it('should be remove city storage', async () => {    
        await saveStorageCity(newCity)
        await removeStorageCity()
    
        const response = await getStorageCity()
    
        expect(response).toBeNull()
      })
})