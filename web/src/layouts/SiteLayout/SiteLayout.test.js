import { render } from '@redwoodjs/testing'

import SiteLayout from './SiteLayout'

describe('SiteLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SiteLayout />)
    }).not.toThrow()
  })
})
