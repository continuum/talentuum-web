import netlifyIdentity from "netlify-identity-widget"

export function openLogin () {
  return netlifyIdentity.open('signup')
}

export function currentUser() {
  return netlifyIdentity.currentUser();
}

export function intercomUserData(user) {
  let netlifyUser = user || currentUser()
  if (!netlifyUser) return {app_id: window.APP_ID};
  return  {
    app_id: window.APP_ID,
    user_id: netlifyUser.id,
    email: netlifyUser.email,
    name: netlifyUser.user_metadata.full_name,
    created_at:  Date.parse(netlifyUser.created_at) / 1000
  };
}

netlifyIdentity.on('login', user => {
  if (window.Intercom) {
    window.Intercom('boot', intercomUserData(user));
  }
  netlifyIdentity.close();
})

netlifyIdentity.on('logout', user => {
  if (window.Intercom) {
    window.Intercom('shutdown');
  }
})