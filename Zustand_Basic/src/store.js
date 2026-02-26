import { create } from 'zustand'
import {createJSONStorage, devtools, persist} from 'zustand/middleware'

// create(() => {
//     return {

//     }
// })

const store = (set, get) => ({
    count: 1,
    name : 'subh',
    Increament: () => {
        set((state) => ({
            count: state.count + 1,
        }))
    },
    capitalize: () => {
        // Approach -1
        // console.log(get())
        // const {name} = get();
        // set({
        //     name: name.charAt(0).toUpperCase() + name.slice(1)
        // })
        // Approach -2
        // console.log(set()) // through error, u can't access the set fun, set only for set not geting somethings
        set((bala) => {
            return {
                name: bala.name.charAt(0).toUpperCase() + bala.name.slice(1),
            }
        })
    }
})

const useMyStore = create(devtools(persist(store,{
    name: 'mystore',
    storage: createJSONStorage(() => sessionStorage),
})))

export default useMyStore;