<script setup lang="ts">
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import type { IUser } from '@/types'
import { useAuthStore } from '@/stores/auth';


const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
});

async function onSubmit(values: any) {
    const authStore = useAuthStore();
    const { username, password } = values;
    await authStore.login(username, password);
}
</script>

<template>
    <div class="card m-3 flex justify-center items-center flex-col t-8">
        <h4 class="text-xl mb-4">Login</h4>
        <div class="max-w-md">
            <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="mb-6">
                    <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        Username</label>
                    <Field name="username" type="text"
                        class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :class="{ 'border-red-500': errors.username }" />
                    <div class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.username }}</div>
                </div>
                <div class="form-group">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        Password</label>
                    <Field name="password" type="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :class="{ 'border-red-500': errors.password }" />
                    <div class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.password }}</div>
                </div>
                <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
                </button>
            </Form>
            <span class="mt-10 block"> Use "admin" username in ordet to get access to the timeLine component </span>
        </div>
</div>
</template>
