import { Link, routes } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'
import 'src/components/PublicItems/style.css'
//console.log($query);
//let query;
export const QUERY = gql`
  query ITEMS {
    items {
      id
      url
      title
      authors
      type
      created
    }
  }
`


export const Loading = () => {
  const { query } = useParams()
  //query={"from":"loading","original": query};
  console.log(query);

  return <div>Loading...{query}</div>
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ items,query }) => {
console.log('query from success fx in publicitemscell.sj', query);

  const MAX_STRING_LENGTH = 150

  const truncate = (text) => {
    let output = text
    if (text && text.length > MAX_STRING_LENGTH) {
      output = output.substring(0, MAX_STRING_LENGTH) + '...'
    }
    return output
  }

  const timeTag = (datetime) => {
    var justDate = new Date(datetime).toISOString().split('T')[0];
    return (<>
      <time dateTime={datetime} title={datetime}>
        {justDate}
      </time>

      {Context("date", justDate)}
    </>
    )
  }

  const typeTag = (contentType) => {
    if (contentType == "text" || contentType == "blog") {
      return <span className="type">📄</span>
    }
    if (contentType == "audio") {
      return <span className="type">🔉</span>
    }
    if (contentType == "video") {
      return <span className="type">📺</span>
    }
  }
  const ShowMenu = (field, value, event) => {
    event.currentTarget
    console.log('in ShowMenu field[', field, '] and value[', value, ']');

    event.currentTarget.nextSibling.classList.remove('hidden');
  }
  const Context = (field, value) => {
    return (<>
      <span className="context" onClick={(e) => { ShowMenu(field, value,e) }} alt={field + value}>
        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
      </span>
      <div className="contextMenu hidden">
      <div className="contextMenuItems">
        <div onClick={(event)=>{event.currentTarget.parentNode.parentNode.classList.add('hidden')}}>Back</div>
        <div onClick={()=>{console.log(field, '=', value)}}>
        <Link to={routes.home( {query: field + '=' + value})}>{field} = {value}*</Link></div>

        <div onClick={()=>{console.log(field, '!=', value)}}>
        <Link to={routes.home( {query: field + '!=' + value})}>{field} = {value}*</Link>
        </div>

        </div>
      </div>
    </>)
  }
  const AuthorsTag = (authors) => {
    return authors.map((author) => (
      <div className="authors" key={author}>
        <span className="author">{author}</span>
        {Context("author", author)}
      </div>
    ))
  }
  return (

    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className="link" key={item.id}>
            <td>
                <a href={truncate(item.url)}>
                  {typeTag(item.type)}
                  <span className="title">{truncate(item.title)}</span>
                  <span className="url">{item.url}</span>
                </a>
              </td>
              <td>{timeTag(item.created)}</td>
              <td>{AuthorsTag(item.authors)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
