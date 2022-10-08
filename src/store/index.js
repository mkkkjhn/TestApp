import {createStore} from "vuex";
import {usersModule} from "@/store/usersModule";

export default createStore({
    modules: {
        usersModule
    }
})