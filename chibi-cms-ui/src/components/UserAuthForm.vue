<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const router = useRouter()
const isLoading = ref(false)
const formData = ref({
    email: '',
    password: ''
})
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true
  console.log(formData.value)
  router.push('/dashboard')
}
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="isLoading"
            v-model="formData.email"
          />
        </div>
        <div class="grid gap-1">
          <Label class="sr-only" for="password">Password</Label>
          <Input
            id="password"
            placeholder="Password"
            type="password"
            auto-complete="current-password"
            :disabled="isLoading"
            v-model="formData.password"
          />
        </div>
        <Button :disabled="isLoading">
          <Icon v-if="isLoading" icon="lucide:loader-2" class="mr-2 h-4 w-4 animate-spin" />
          Sign In
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
    <Button variant="outline" type="button" :disabled="isLoading">
      <Icon v-if="isLoading" icon="lucide:loader-2" class="mr-2 h-4 w-4 animate-spin" />
      <Icon v-else icon="radix-icons:github-logo" class="mr-2 h-4 w-4" />
      GitHub
    </Button>
  </div>
</template>