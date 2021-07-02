function Logout() {
      window.localStorage.clear('auth_token');
      window.localStorage.clear('auth_key');
      window.localStorage.clear('perm_groups');
      window.location.replace('/');
}
Logout();