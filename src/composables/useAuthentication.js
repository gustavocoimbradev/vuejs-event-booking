import { ref } from 'vue'

export default function useAuthentication() {
    const user = ref({
        id: 1
    })
    return { user }
}