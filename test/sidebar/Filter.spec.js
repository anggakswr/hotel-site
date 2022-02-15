import { mount, config } from '@vue/test-utils'
import Vue from 'vue'
import Filter from '~/components/sidebar/Filter.vue'

config.mocks.$route = {
  query: null,
}

config.mocks.$router = {
  push() {},
}

describe('sidebar', () => {
  test('clear sidebar filter', async () => {
    const wrapper = mount(Filter, {
      propsData: {
        title: 'Reviews',
        items: [{ id: 'asd', label: 'asd' }],
        queryKey: 'reviews',
        showClearBtn: true,
      },
    })

    const checkboxes = wrapper.findAll('input[type="checkbox"]')

    // check the checkbox
    checkboxes.at(0).setChecked()
    await Vue.nextTick()

    // the checkbox should be checked
    expect(checkboxes.at(0).element.checked).toBeTruthy()

    const clearBtn = wrapper.find('#clearBtn')

    // click the clear btn
    clearBtn.trigger('click')
    await Vue.nextTick()

    // the checkbox is should be cleared
    expect(checkboxes.at(0).element.checked).toBeFalsy()
  })

  test('show more items & show less items', async () => {
    const items = []

    for (let i = 0; i < 5; i++) {
      items.push({ id: i, label: i })
    }

    const wrapper = mount(Filter, {
      propsData: {
        title: 'Reviews',
        items,
        queryKey: 'reviews',
        firstShow: 2,
      },
    })

    const showMoreBtn = wrapper.find('#showMoreBtn')

    // check show more btn text
    expect(showMoreBtn.text()).toBe('Show 3 more')

    // click the show more btn
    await showMoreBtn.trigger('click')

    // try to find the show more btn again
    const showMoreBtn2 = wrapper.find('#showMoreBtn')

    // the show more btn should gone
    expect(showMoreBtn2.exists()).toBe(false)

    const showLessBtn = wrapper.find('#showLessBtn')

    // click the show less btn
    await showLessBtn.trigger('click')

    // try to find the show more btn again
    const showMoreBtn3 = wrapper.find('#showMoreBtn')

    // the show more btn should appear
    expect(showMoreBtn3.exists()).toBe(true)

    // try to find the show less btn again
    const showLessBtn2 = wrapper.find('#showLessBtn')

    // the show more btn should gone
    expect(showLessBtn2.exists()).toBe(false)
  })
})
