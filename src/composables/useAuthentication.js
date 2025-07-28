import { ref } from 'vue'

export default function useAuthentication() {
  const id = localStorage.getItem('user_id') || crypto.randomUUID()
  localStorage.setItem('user_id', id)
  const user = ref({ id })
  return { user }
}
