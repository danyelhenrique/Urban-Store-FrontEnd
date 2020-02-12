/* eslint-disable class-methods-use-this */
class Persist {
  token() {
    let accessToken;
    try {
      const store = JSON.parse(localStorage.getItem('persist:root'));
      const { token } = JSON.parse(store.user);
      accessToken = token;
    } catch (err) {}

    return { accessToken };
  }
}

export default new Persist();
