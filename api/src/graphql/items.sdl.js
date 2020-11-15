export const schema = gql`
  type Item {
    id: Int!
    url: String!
    title: String!
    authors: JSON!
    source: String!
    type: String!
    created: DateTime!
  }

  type Query {
    items: [Item!]!
    item(id: Int!): Item
  }

  input CreateItemInput {
    url: String!
    title: String!
    authors: JSON!
    source: String!
    type: String!
  }

  input UpdateItemInput {
    url: String
    title: String
    authors: JSON
    source: String
    type: String
    created: DateTime
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item!
    updateItem(id: Int!, input: UpdateItemInput!): Item!
    deleteItem(id: Int!): Item!
  }
`
