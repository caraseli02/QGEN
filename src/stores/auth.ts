import { defineStore } from 'pinia';
import { router } from '@/router';
import type { IUser } from '@/types';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: {
            username: 'test',
            password: 'test'
        } as IUser | null,
    }),
    actions: {
        async login(username: string, password: string) {
            this.user = { username, password }
            await router.push('/');
        },
        logout() {
            this.user = null;
            router.push('/login');
        }
    }
});
