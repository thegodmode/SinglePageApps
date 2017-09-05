import {observable} from "mobx"

class TodoStore{
    @observable todos = ["buy milk", "buy eggs"];
}

export default new TodoStore