import { ref } from 'vue'

const bookings = ref([])
const loadingBookings = ref(false)

const fetchBookings = async (pulseEffect = true) => {
    loadingBookings.value = pulseEffect
    try {
        const response = await fetch('http://localhost:3001/bookings')
        bookings.value = await response.json()
    } catch (error) {
        console.error(error)
    } finally {
        loadingBookings.value = false
    }
}

const handleCancel = async (booking) => {
    try {
        await fetch('http://localhost:3001/bookings/' + booking.id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        console.log(error)
    } finally {
        await fetchBookings(false)
    }
}

export default function useBookings() {

    return {
        bookings,
        loadingBookings,
        fetchBookings,
        handleCancel
    }
}
