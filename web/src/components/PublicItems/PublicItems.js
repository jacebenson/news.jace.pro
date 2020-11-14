import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faMicrophoneAlt, faVideo, faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { QUERY } from 'src/components/ItemsCell'
import 'src/components/PublicItems/style.css'

const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItemMutation($id: Int!) {
    deleteItem(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toISOString().split('T')[0]}
    </time>
  )
}

const typeTag = (contentType) => {
  if(contentType == "text" || contentType == "blog"){
    return <FontAwesomeIcon icon={faFile} color="grey" size="lg"/>
  }
  if(contentType == "audio"){
    return <FontAwesomeIcon icon={faMicrophoneAlt} color="grey" size="lg"/>
  }
  if(contentType == "video"){
    return <FontAwesomeIcon icon={faVideo} color="grey" size="lg"/>
  }
}
const AuthorsTag = (authors) => {
  return authors.map((author)=>(
    <div className="authors" key={author}>
    <span className="author">{author}</span>
    <span className="context"><FontAwesomeIcon icon={faEllipsisV} color="grey" size="lg"/></span>
    </div>
  ))
}
const FilterMenu = <>

</>
const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ItemsList = ({ items }) => {
  const { addMessage } = useFlash()
  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Source</th>

            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{typeTag(item.type)}</td>
              <td>{timeTag(item.createdAt)}</td>
              <td>
                <a href={truncate(item.url)}>{truncate(item.title)}</a>
              </td>
              <td>{AuthorsTag(item.authors)}</td>
              <td>{truncate(item.source)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.item({ id: item.id })}
                    title={'Show item ' + item.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editItem({ id: item.id })}
                    title={'Edit item ' + item.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete item ' + item.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(item.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ItemsList
