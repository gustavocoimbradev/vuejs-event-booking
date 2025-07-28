import { ref, computed } from 'vue'

import useBookings from '@/composables/useBookings'

import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'

const { bookings } = useBookings()

const events = ref([])
const loadingEvents = ref(false)

const fetchEvents = async (pulseEffect = true) => {
    loadingEvents.value = pulseEffect
    try {
        const snapshot = await getDocs(collection(db, 'events'))
        events.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } finally {
        loadingEvents.value = false
    }
}

const availableEvents = computed(() => {
    return events.value.filter(event => {
        return !bookings.value.some(booking => booking.event.id === event.id)
    })
})

export default function useEvents() {
    return {
        events,
        loadingEvents,
        fetchEvents,
        availableEvents
    }
}
