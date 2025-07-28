import { ref, computed } from 'vue'

import useBookings from '@/composables/useBookings'

const { bookings, fetchBookings } = useBookings()

const events = ref([])
const loadingEvents = ref(false)

const fetchEvents = async (pulseEffect = true) => {
    loadingEvents.value = pulseEffect
    try {
        const response = await fetch('http://localhost:3001/events')
        events.value = await response.json()
    } finally {
        loadingEvents.value = false
    }
}

const availableEvents = computed(() => {
    return events.value.filter(event => {
        return !bookings.value.some(booking => booking.event.id === event.id)
    })
})

const handleRegistration = async (event) => {
    try {
        const newBooking = {
            id: Date.now().toString(),
            user: { id: 1 },
            event
        }
        await fetch('http://localhost:3001/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
    } catch (error) {
        console.error(error)
    } finally {
        await fetchEvents(false)
        await fetchBookings(false)
    }
}

export default function useEvents() {
    return {
        events,
        loadingEvents,
        fetchEvents,
        availableEvents,
        handleRegistration
    }
}
