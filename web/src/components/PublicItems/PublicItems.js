import { PublicItemsCell } from 'src/components/PublicItemsCell'
import 'src/components/PublicItems/style.css'
const PublicItems = ({query}) => {
  console.log('query from publicitems.js', query);
  return <PublicItemsCell query={query} />
}

export default PublicItems
