import { create } from 'zustand'

interface BearState {
    blackBears: number;
    polarBears: number;
    pandaBears: number;
    pandas: {
        nombre: string;
        edad: number;
    }[],
    increaseBears: (by: number) => void;
    increasePolarBears: (props: number) => void;
    increasePandaBears: (props: number) => void;
    pandasChanged: () => void;
    computed: {
        totalBears: number;
    },
    addBear: () => void;
    CleanBear: () => void;
};

export const useBearStore = create<BearState>()((set, get) => ({
    blackBears: 0,
    polarBears: 0,
    pandaBears: 0,
    pandas: [{ nombre: 'Panda', edad: 1 }],
    computed: {
        get totalBears() {
            return get().blackBears + get().polarBears + get().pandaBears + get().pandas.length;
        }
    },
    increaseBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
    increasePolarBears: (props: number) => set((state) => ({ polarBears: state.polarBears + props })),
    increasePandaBears: (props: number) => set((state) => ({ pandaBears: state.pandaBears + props })),
    pandasChanged: () => set((state) => ({ pandas: [...state.pandas] })),

    addBear: () => set((state) => ({ pandas: [...state.pandas, { edad: state.pandas.length + 1, nombre: `#panda ${state.pandas.length + 1}` }] })),
    CleanBear: () => set({ pandas: [] }),
}))
