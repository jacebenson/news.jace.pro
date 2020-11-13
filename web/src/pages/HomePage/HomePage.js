import { Link, routes } from '@redwoodjs/router'
import SiteLayout from 'src/layouts/SiteLayout/SiteLayout'
import ListItemsCell from 'src/components/ListItemsCell'
const HomePage = () => {
  return (
    <>
      <SiteLayout>
        This is Home!
        <ListItemsCell/>
      </SiteLayout>
    </>
  )
}

export default HomePage
