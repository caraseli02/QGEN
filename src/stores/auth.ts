import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'
import { router } from '@/router';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: useStorage('user', {}),
    }),
    actions: {
        async login(username: string, password: string) {
            localStorage.setItem('user', JSON.stringify({ username, password }));
        },
        logout() {
            this.user = {};
            router.push('/login');
        }
    }
});
