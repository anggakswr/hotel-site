import { mount, config } from '@vue/test-utils'
import Vue from 'vue'
import Filter from '@/components/sidebar/Filter.vue'

config.mocks.$route = {
  query: null,
}

config.mocks.$router = {
  push() {},
}

config.mocks.$t = (msg) => msg

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

    // check show more btn text
    const showMoreBtn = wrapper.find('#showMoreBtn')
    expect(showMoreBtn.text()).toContain('3')

    // click the show more btn
    await showMoreBtn.trigger('click')

    // the show more btn should gone
    const showMoreBtn2 = wrapper.find('#showMoreBtn')
    expect(showMoreBtn2.exists()).toBe(false)

    // click the show less btn
    const showLessBtn = wrapper.find('#showLessBtn')
    await showLessBtn.trigger('click')

    // the show more btn should appear
    const showMoreBtn3 = wrapper.find('#showMoreBtn')
    expect(showMoreBtn3.exists()).toBe(true)

    // the show more btn should gone
    const showLessBtn2 = wrapper.find('#showLessBtn')
    expect(showLessBtn2.exists()).toBe(false)
  })
})
