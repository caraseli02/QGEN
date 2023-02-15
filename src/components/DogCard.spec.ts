import ElementPlus from 'element-plus'
import { render, screen } from '@testing-library/vue';
import DogCard from './DogCard.vue';
import { describe, it, expect } from 'vitest'


describe('Hello World component', () => {
  it('should render correctly', () => {
    render(DogCard, {
      global: {
        plugins: [ElementPlus],
      },
      props: {
        dogData: {
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
        }
      }
    })
    expect(screen.getByText('Labrador Retriever'))
  })
})

