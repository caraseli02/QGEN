import type { IDog } from '@/types'
import { mount } from '@vue/test-utils';
import DataTable from './DataTable.vue';
import ElementPlus from 'element-plus';
import { describe, it, expect } from 'vitest'

const dogsList: IDog[] = [
  {
    breeds: [
      {
        name: 'Labrador Retriever',
        bred_for: 'Retrieving game',
        temperament: 'Friendly'
      }
    ],
    url: 'https://example.com/dog1.jpg',
    width: '100',
    height: '100',
    id: '1',
  },
  {
    breeds: [
      {
        name: 'German Shepherd',
        bred_for: 'Herding sheep',
        temperament: 'Confident'
      }
    ],
    url: 'https://example.com/dog2.jpg',
    width: '100',
    height: '100',
    id: '2',
  }
]



describe('Hello World component', () => {
  it('should mount correctly', () => {
    const wrapper = mount(DataTable, {
      global: {
        plugins: [ElementPlus],
      },
      props: {
        DogsList: dogsList
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
