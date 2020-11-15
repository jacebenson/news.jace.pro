import { Link, routes } from '@redwoodjs/router'

import PublicItems from 'src/components/PublicItems'

export const QUERY = gql`
  query ITEMS {
    items {
      id
      url
      title
      authors
      source
      type
      created
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No items yet. '}
      <Link to={routes.newItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ items }) => {
  return <PublicItems items={items} />
}
