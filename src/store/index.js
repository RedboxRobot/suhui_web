import HomeStore from './home';

class Store {
  constructor() {
    this.home = new HomeStore(this);
  }
}

const store = new Store();

export default store;