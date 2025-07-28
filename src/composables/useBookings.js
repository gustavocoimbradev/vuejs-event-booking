import { ref } from 'vue'

import useAuthentication from '@/composables/useAuthentication'

import { db } from '@/firebase'
import { doc, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore'


const { user } = useAuthentication()

const bookings = ref([])
const loadingBookings = ref(false)

const fetchBookings = async (pulseEffect = true) => {
    loadingBookings.value = pulseEffect
    try {
        const snapshot = await getDocs(collection(db, 'bookings'))
        bookings.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    } catch (error) {
        console.error(error)
    } finally {
        loadingBookings.value = false
    }
}

const handleRegistration = async (event) => {
    try {
        const newBooking = {
            user: user.value,
            event
        }
        await addDoc(collection(db, 'bookings'), newBooking)
    } catch (error) {
        console.error(error)
    } finally {
        await fetchBookings(false)
    }
}

const handleCancel = async (booking) => {
    try {
        await deleteDoc(doc(db, 'bookings', booking.id))
        console.log(booking.id)
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
        handleCancel,
        handleRegistration
    }
}
