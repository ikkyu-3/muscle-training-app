<template>
  <v-expansion-panel
    :disabled="disabled"
    :readonly="readonly"
    @click="click(index, status)"
  >
    <workout-panel-header :name="workout.name" :status="status" />
    <workout-panel-content :index="index" :workout="workout" :finish="finish" />
  </v-expansion-panel>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import WorkoutPanelHeader from '@/components/molecules/panel-parts/WorkoutPanelHeader.vue'
import WorkoutPanelContent from '@/components/molecules/panel-parts/WorkoutPanelContent.vue'
import { Workout, WorkoutStatus, WorkoutResult } from '@/types'

type WorkoutPanelProps = {
  index: number
  workout: Workout
  status: WorkoutStatus
  disabled: boolean
  readonly: boolean
  click: (index: number, status: WorkoutStatus) => void
  finish: (index: number, results: WorkoutResult[], memo: string) => void
}

export default createComponent<WorkoutPanelProps, {}>({
  components: { WorkoutPanelHeader, WorkoutPanelContent },
  props: {
    index: Number,
    workout: Object,
    status: String,
    disabled: Boolean,
    readonly: Boolean,
    click: Function,
    finish: Function
  }
})
</script>
