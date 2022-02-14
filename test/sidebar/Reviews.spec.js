import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Reviews from '@/components/sidebar/Reviews.vue'

describe('sidebar', () => {
  test('clear reviews filter', async () => {
    const wrapper = mount(Reviews)

    const checkboxes = wrapper.findAll('input[type="checkbox"]')

    checkboxes.at(0).setChecked()
    await Vue.nextTick()

    expect(checkboxes.at(0).element.checked).toBeTruthy()

    const clearBtn = wrapper.find('button')

    clearBtn.trigger('click')
    await Vue.nextTick()

    expect(checkboxes.at(0).element.checked).toBeFalsy()
  })
})
