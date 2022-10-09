import {createStore} from "vuex";
import {sliderModule} from "@/store/sliderModule";

export default createStore({
    modules: {
        usersModule: sliderModule
    }
})