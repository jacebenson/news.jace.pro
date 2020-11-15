import { Link, routes } from '@redwoodjs/router'
import SiteLayout from 'src/layouts/SiteLayout/SiteLayout'
import PublicItemsCell from 'src/components/PublicItemsCell'
const HomePage = (query) => {
  //console.log('query from homepage.js', query.query);
   return (
    <>
      <SiteLayout>
        This is Home!
        <PublicItemsCell query={query}/>
      </SiteLayout>
    </>
  )
}

export default HomePage
