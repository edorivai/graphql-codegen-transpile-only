import { buildSchema } from "graphql";

const schema = buildSchema(/* GraphQL */ `
  type MyType {
    foo: String!
  }

  type Query {
    myType: MyType!
  }
`);

const boom: string = 123;

export default schema;
