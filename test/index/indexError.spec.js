import { shallowMount, config } from '@vue/test-utils'
import Vue from 'vue'
import axios from 'axios'
import index from '@/pages/index.vue'

config.mocks.$t = (msg) => msg
window.scrollTo = () => {}

const mockError = {
  response: {
    data: {
      status: 400,
      type: 'invalid_request_error',
      message: 'Check-out date must be after Check-in date',
      code: 'invalid_params',
      resolveActions: {},
    },
  },
}

// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockError` instead
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.reject(mockError)),
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
  test('GET error hotels', async () => {
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

    // err msg should appear
    const errorMsg = wrapper.find('indexerror-stub')
    expect(errorMsg.exists()).toBe(true)

    // not found msg should not appear
    const notFoundDesc = wrapper.find('indexnotfound-stub')
    expect(notFoundDesc.exists()).toBe(false)

    // hotels should not exist
    const hotels = wrapper.findAll('indexhotel-stub')
    expect(hotels.length).toBe(0)
  })
})
