import { shallowMount, config } from '@vue/test-utils'
import Vue from 'vue'
import axios from 'axios'
import index from '@/pages/index.vue'

config.mocks.$t = (msg) => msg

const mockHotels = {
  data: {
    outlets: {
      availability: {
        results: [
          {
            property: {
              appCode: '',
              locale: 'en-US',
              propertyCode: 'fqeA',
              name: 'Citadines St Georges Terrace Perth',
              starRating: 4,
              location: {
                address: 'No 185 St Georges Terrace',
                city: 'Perth',
                country: 'AU',
                countryCode: 'AU',
                postalCode: '6000',
                stateProvince: null,
                latLng: {
                  lat: -31.953843,
                  lng: 115.853637,
                },
              },
              trustYou: {
                score: 87,
                reviewsCount: 1245,
                key: 'pos3',
              },
              checkInTime: null,
              checkOutTime: '11:00:00.000000',
              contacts: {
                phone: '61-8-92263355',
                fax: '',
                email: '',
                website: null,
              },
              airportCode: '',
              heroImage: {
                caption: '',
                url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QK0XAKe6.jpg',
              },
              gallery: [
                {
                  s: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6pPwg8p6.jpg',
                  },
                  m: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6pPwg8p6.jpg',
                  },
                },
                {
                  s: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6OalKrN4.jpg',
                  },
                  m: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6OalKrN4.jpg',
                  },
                  xs: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6OalKrN4.jpg',
                  },
                  l: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6OalKrN4.jpg',
                  },
                  xl: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6OalKrN4.jpg',
                  },
                },
                {
                  s: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QMbE8rn6.jpg',
                  },
                  m: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QMbE8rn6.jpg',
                  },
                  xs: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QMbE8rn6.jpg',
                  },
                  l: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QMbE8rn6.jpg',
                  },
                  xl: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QMbE8rn6.jpg',
                  },
                },
                {
                  s: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/72M9RAl6.jpg',
                  },
                  m: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/72M9RAl6.jpg',
                  },
                },
                {
                  s: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6l1rzJm7.jpg',
                  },
                  m: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6l1rzJm7.jpg',
                  },
                  xs: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6l1rzJm7.jpg',
                  },
                  l: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6l1rzJm7.jpg',
                  },
                  xl: {
                    caption: 'Room',
                    url: 'https://property-gallery.rakutentravelxchange.com/fqeA/6l1rzJm7.jpg',
                  },
                },
              ],
              categoryId: 1,
              facilities: [183, 147, 9, 141, 15, 259, 42, 5, 121],
              reviews: {
                summary: {
                  globalPopularity: 36.508743,
                  highlightList: [
                    {
                      categoryIdList: ['244', '21b', '21'],
                      confidence: 100,
                      text: 'Fully equipped gym',
                    },
                    {
                      categoryIdList: ['f63a', '11', '111', '333', '11b'],
                      confidence: 100,
                      text: 'Clean sheets',
                    },
                  ],
                  hotelType: {
                    text: 'Very good wellness hotel.',
                  },
                  location: {
                    text: 'Located near shopping areas with easy access to parking.',
                  },
                  locationNearby: null,
                  popularWith: {
                    text: 'Popular among solo travelers.',
                    tripType: 'solo',
                  },
                  popularity: 37,
                  reviewsDistribution: [
                    {
                      reviewsCount: 22,
                      stars: 1,
                    },
                    {
                      reviewsCount: 26,
                      stars: 2,
                    },
                    {
                      reviewsCount: 113,
                      stars: 3,
                    },
                    {
                      reviewsCount: 464,
                      stars: 4,
                    },
                    {
                      reviewsCount: 617,
                      stars: 5,
                    },
                  ],
                  score: '85',
                  scoreDescription: 'Very Good',
                  summarySentenceList: [],
                  text: 'Very good wellness hotel. Located near shopping areas with easy access to parking.',
                },
              },
            },
            packages: [
              {
                propertyCode: 'fqeA',
                description: 'studio deluxe',
                supplierDescription: 'studio deluxe',
                foodCode: 1,
                roomType: 'studio deluxe',
                roomView: '',
                beds: {},
                nonRefundable: false,
                token: null,
                images: [],
                rateType: 'pay_at_hotel',
                pricingVer: '178',
                initialForex: 83.79976293615354,
                displayRate: {
                  value: 15084,
                  currency: 'JPY',
                  txFees: 0,
                  txFeesInPct: 0,
                  taxesAndFeesTotal: 1508.4,
                  taxesConfident: 0,
                },
                adjustedDisplayRate: {
                  value: 15084,
                  currency: 'JPY',
                  txFees: 0,
                  txFeesInPct: 0,
                  taxesAndFeesTotal: 1508.4,
                  taxesConfident: 0,
                },
                marketRates: [],
                unitMarketRates: [],
                score: 0,
                skip: false,
                finalAdjustmentAmount: null,
                finalAdjustments: [],
                totalAmount: null,
                rakutenPoint: 301,
                payAtHotel: true,
              },
            ],
            supplierId: null,
            payAtHotel: true,
            supplierRank: 4,
          },
        ],
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
  test('do not GET hotels when city query does not exists', () => {
    const wrapper = shallowMount(index, {
      mocks: {
        $axios: axios,
        $route: {
          query: {},
        },
      },
      stubs,
    })

    // not calling the api
    expect(axios.get).toHaveBeenCalledTimes(0)

    // not found msg should appear
    const notFoundDesc = wrapper.find('indexnotfound-stub')
    expect(notFoundDesc.exists()).toBe(true)

    // hotels should not exist
    const hotels = wrapper.findAll('indexhotel-stub')
    expect(hotels.length).toBe(0)
  })

  test('GET hotels when city query is exists', async () => {
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

    // search result should exist
    const hotels = wrapper.findAll('indexhotel-stub')
    expect(hotels.length).toBe(1)

    // not found msg should not exist
    const notFoundDesc = wrapper.find('indexnotfound-stub')
    expect(notFoundDesc.exists()).toBe(false)

    // err msg should not exist
    const errDesc = wrapper.find('indexerror-stub')
    expect(errDesc.exists()).toBe(false)
  })
})
