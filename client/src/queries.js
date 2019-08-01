import gql from 'graphql-tag';

export const authRegistration = gql`
mutation authRegistration($registrationForm: Register!) {
  authentication(input: $registrationForm)
    @rest(
      type: "Register",
      path: "/auth/registration/",
      method: "POST"
    ) {
      key
    }
}
`
