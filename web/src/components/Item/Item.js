import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/ItemsCell'

const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItemMutation($id: Int!) {
    deleteItem(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Item = ({ item }) => {
  const { addMessage } = useFlash()
  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.items())
      addMessage('Item deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete item ' + id + '?')) {
      deleteItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Item {item.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{item.id}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{item.url}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{item.title}</td>
            </tr>
            <tr>
              <th>Authors</th>
              <td>{jsonDisplay(item.authors)}</td>
            </tr>
            <tr>
              <th>Source</th>
              <td>{item.source}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{item.type}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(item.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editItem({ id: item.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(item.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Item
