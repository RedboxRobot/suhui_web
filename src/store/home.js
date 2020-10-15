import { action, observable, computed } from 'mobx';

export default class HomeStore {
  @observable name;

  constructor(store) {
    this.name = '速辉';
  }

  @action changeName(name) {
    this.name = name;
  }
}