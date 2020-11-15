import { render } from '@redwoodjs/testing'

import SearchPage from './SearchPage'

describe('SearchPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchPage />)
    }).not.toThrow()
  })
})
