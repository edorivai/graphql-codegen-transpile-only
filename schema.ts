import { buildSchema } from "graphql";

const schema = buildSchema(/* GraphQL */ `
  type MyType {
    foo: String!
  }

  type Query {
    myType: MyType!
  }
`);

export default schema;
