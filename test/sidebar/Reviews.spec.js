import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Filter from '~/components/sidebar/Filter.vue'

describe('sidebar', () => {
  test('clear sidebar filter', async () => {
    const wrapper = mount(Filter, {
      propsData: {
        items: [{ id: 'asd', label: 'asd' }],
        queryKey: 'reviews',
        showClearBtn: true,
      },
    })

    const checkboxes = wrapper.findAll('input[type="checkbox"]')

    checkboxes.at(0).setChecked()
    await Vue.nextTick()

    expect(checkboxes.at(0).element.checked).toBeTruthy()

    const clearBtn = wrapper.find('#clearBtn')

    clearBtn.trigger('click')
    await Vue.nextTick()

    expect(checkboxes.at(0).element.checked).toBeFalsy()
  })
})
