import { type StateCreator, create } from "zustand"
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";



interface PersonProps {
    fistName: string;
    lastName: string;
}

interface Actions {
    setFirstName: (props: string) => void;
    setLastName: (props: string) => void;
}

const storeApi: StateCreator<PersonProps & Actions> = (set) => (
    {
        fistName: '',
        lastName: '',
        setFirstName: (props: string) => set({ fistName: props }),
        setLastName: (props: string) => set({ lastName: props }),
    }
);

const customSessionStorage: StateStorage = {
    getItem: function (name: string): string | null | Promise<string | null> {
        const data = sessionStorage.getItem(name);
        return data
    },
    setItem: function (name: string, value: string){
        sessionStorage.setItem(name, value);
    },

    removeItem: function () {
        sessionStorage.clear();
    }
}
export const usePersonStore = create<PersonProps & Actions>()(
    persist(storeApi, {
        name: 'person-store',
        storage : createJSONStorage(() => customSessionStorage)
    })
)