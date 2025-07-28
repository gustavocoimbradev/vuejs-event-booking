<script setup>

  import { onMounted } from 'vue'

  import Container from '@/components/Container.vue'
  import Header from '@/components/Header.vue'
  import Section from '@/components/Section.vue'
  import Footer from '@/components/Footer.vue'
  import EventsGrid from '@/components/EventsGrid.vue'
  import EventCard from '@/components/EventCard.vue'
  
  import useEvents from '@/composables/useEvents'
  import useBookings from '@/composables/useBookings'

  const { loadingEvents, fetchEvents, availableEvents, handleRegistration } = useEvents()
  const { bookings, loadingBookings, fetchBookings, handleCancel } = useBookings()

  onMounted(() => {
    fetchEvents()
    fetchBookings()
  })
</script>

<template>
  <main>
    <Header/> 
    <Container>
      <Section>
        <template #head>
          Available Events
        </template>
        <template #main>
          <EventsGrid>
            <template v-if="!loadingEvents" #main>
              <EventCard 
                v-for="event in availableEvents" 
                :key="event.id"
                :registered="false"
                :event="event"
                @button="() => handleRegistration(event)"
              />
            </template>
            <template v-if="loadingEvents" #main>
              <EventCard 
                v-for="i in 6" 
                :eventsLoading="true"
              />
            </template>
          </EventsGrid>
        </template>
      </Section>
      <Section>
        <template #head>
          Your Bookings
        </template>
        <template #main>
          <EventsGrid>
            <template v-if="!loadingBookings" #main>
              <EventCard 
                v-for="booking in bookings" 
                :key="booking.id"
                :registered="true"
                :event="booking.event"
                :booking="booking"
                @button="() => handleCancel(booking)"
              />
            </template>
            <template v-if="loadingBookings" #main>
              <EventCard
                v-for="i in 6" 
                :eventsLoading="true"
              />
            </template>
          </EventsGrid>
        </template>
      </Section>
      <Footer/>
    </Container>
  </main>
</template>

