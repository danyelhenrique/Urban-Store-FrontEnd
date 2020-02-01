/* eslint-disable class-methods-use-this */
class Persist {
  token() {
    const store = JSON.parse(localStorage.getItem('persist:root'));
    const { token: accessToken } = JSON.parse(store.user);

    return { accessToken };
  }
}

export default new Persist();
