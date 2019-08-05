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
`;


export const authLogin = gql`
mutation authLogin($loginForm: Login!) {
  login(input: $loginForm)
    @rest(
      type: "Login",
      path: "/auth/login/",
      method: "POST"
    ) {
      key
    }
}
`;
