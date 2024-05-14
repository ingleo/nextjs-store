'use server';

import { GraphQLClientSingleton } from 'app/graphql';
import { createUserMutation } from 'app/graphql/mutations/createUserMutation';

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject['passwordConfirmation'];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      phone: '+57' + formDataObject['phone'],
    },
  };
  const data = await graphqlClient.request(createUserMutation, variables);

  console.log(data);
};
