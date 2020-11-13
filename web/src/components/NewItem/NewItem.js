import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ItemForm from 'src/components/ItemForm'

import { QUERY } from 'src/components/ItemsCell'

const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation($input: CreateItemInput!) {
    createItem(input: $input) {
      id
    }
  }
`

const NewItem = () => {
  const { addMessage } = useFlash()
  const [createItem, { loading, error }] = useMutation(CREATE_ITEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.items())
      addMessage('Item created.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onSave = (input) => {
    createItem({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Item</h2>
      </header>
      <div className="rw-segment-main">
        <ItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewItem
