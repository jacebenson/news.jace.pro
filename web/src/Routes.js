// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>

<Route path="/search" page={SearchPage} name="search" />
<Route path="/search/{query}" page={SearchPage} name="search" />
      <Route path="/items/new" page={NewItemPage} name="newItem" />
      <Route path="/items/{id:Int}/edit" page={EditItemPage} name="editItem" />
      <Route path="/items/{id:Int}" page={ItemPage} name="item" />
      <Route path="/items" page={ItemsPage} name="items" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/{query}" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
