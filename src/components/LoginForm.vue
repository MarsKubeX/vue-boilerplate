<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="login-form">
        <div class="login-form-field">
          <label for="user">Username</label>
          <input
            type="text"
            name="user"
            id="user"
            v-model="username"
            :class="{ 'is-invalid': errors.username }"
          />
          <small v-if="errors.username" class="error-message">{{
            errors.username
          }}</small>
        </div>
        <div class="login-form-field">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            :class="{ 'is-invalid': errors.password }"
          />
          <small v-if="errors.password" class="error-message">{{
            errors.password
          }}</small>
        </div>
        <button class="primary-button" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

interface FormErrors {
  username: string
  password: string
}

const username: Ref<string> = ref('')
const password: Ref<string> = ref('')
const loginMessage: Ref<string> = ref('')
const errors: Ref<FormErrors> = ref({ username: '', password: '' })
const validateForm = () => {
  let isValid = true
  errors.value = { username: '', password: '' }

  if (!username.value) {
    errors.value.username = 'Username is required'
    isValid = false
  }
  if (!password.value) {
    errors.value.password = 'Password is required'
    isValid = false
  }
  return isValid
}
const handleSubmit = () => {
  if (validateForm()) {
    // Fake AUTH logic
    loginMessage.value = `Logging in as ${username.value}...`
    setTimeout(() => {
      // Here you can reach an API for AUTH
      loginMessage.value = 'Login successful!'
    }, 1000)
  }
}
</script>

<style scoped>
.login-form-field {
  padding-bottom: 1rem;
  label {
    padding-right: 1rem;
  }
  small {
    padding-left: 0.5rem;
  }
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.error-message {
  color: red;
}
.is-invalid {
  border-color: red;
}
</style>
