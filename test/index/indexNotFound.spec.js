import { shallowMount, config } from '@vue/test-utils'
import Vue from 'vue'
import axios from 'axios'
import index from '@/pages/index.vue'

config.mocks.$t = (msg) => msg

const mockHotels = {
  data: {
    outlets: {
      availability: {
        results: [],
      },
    },
  },
}

// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockHotels` instead
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve(mockHotels)),
}))

// stubs child components
const stubs = {
  IndexTabbar: true,
  IndexHotel: true,
  IndexHotelSkeleton: true,
  IndexPagination: true,
  IndexNotFound: true,
  IndexError: true,
}

describe('index page', () => {
  test('GET empty hotels', async () => {
    const wrapper = shallowMount(index, {
      mocks: {
        $axios: axios,
        $route: {
          query: {
            city: 'city1',
          },
        },
      },
      stubs,
    })

    // not calling the api
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/api/job01/search/city1')

    // wait for the DOM changes
    await Vue.nextTick()

    // loading placeholder appear
    const skeletons = wrapper.findAll('indexhotelskeleton-stub')
    expect(skeletons.length).toBe(3)

    // wait for the DOM changes
    await Vue.nextTick()

    // loading placeholder gone
    const skeletons2 = wrapper.findAll('indexhotelskeleton-stub')
    expect(skeletons2.length).toBe(0)

    // wait for the DOM changes
    await Vue.nextTick()

    // not found msg should appear
    const notFoundDesc = wrapper.find('indexnotfound-stub')
    expect(notFoundDesc.exists()).toBe(true)

    // err msg should not appear
    const errorMsg = wrapper.find('indexerror-stub')
    expect(errorMsg.exists()).toBe(false)

    // hotels should not exist
    const hotels = wrapper.findAll('indexhotel-stub')
    expect(hotels.length).toBe(0)
  })
})
