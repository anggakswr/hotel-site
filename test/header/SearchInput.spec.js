import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import axios from 'axios'
import SearchInput from '@/components/header/SearchInput.vue'

const mockCities = {
  data: [
    { cityCode: 'city1', label: 'city1' },
    { cityCode: 'city2', label: 'city2' },
  ],
}

// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockCities` instead
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve(mockCities)),
}))

describe('header', () => {
  test('show city suggestions from the API', async () => {
    const wrapper = shallowMount(SearchInput, {
      mocks: {
        // $axios: jest.fn(() => Promise.resolve(mockCities)),
        $axios: axios,
      },
      stubs: {
        NuxtLink: true,
      },
    })
    const input = wrapper.find('input')

    // focus on search input
    await input.trigger('focusin')

    // Let's assert that we've called axios.get the right amount of times and
    // with the right parameters.
    expect(axios.get).toHaveBeenCalledTimes(1)

    // Wait until the DOM updates.
    // await flushPromises()
    await Vue.nextTick()

    const nuxtLinks = wrapper.findAll('nuxtlink-stub')

    expect(nuxtLinks.length).toBe(2)
  })
})
