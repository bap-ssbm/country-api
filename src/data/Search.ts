import {  reactive, toRefs } from "vue";

export const searchData = reactive({
    search:'',
    region:''
})

export function getSearchData(){
    return toRefs(searchData)
}