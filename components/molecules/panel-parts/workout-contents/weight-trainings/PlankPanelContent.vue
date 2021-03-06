<template>
  <v-expansion-panel-content class="panel-content">
    <workout-time-result
      :start-time="workout.startTime"
      :end-time="workout.endTime"
    />
    <label class="results-header">Results</label>
    <plank-result
      v-for="(result, index) in state.results"
      :key="index"
      class="result-content"
      :index="index"
      :result="result"
      :delete-result="deleteResult"
      @seconds-change="secondsChange"
      @set-change="setChange"
    />
    <v-btn
      fab
      dark
      small
      class="add-result-button"
      color="lime"
      @click="addResult"
    >
      <v-icon>fa-plus</v-icon>
    </v-btn>
    <memo-field :value="state.memo" />
    <v-btn class="finish-button" color="blue-grey" dark @click="workoutFinish"
      >終了</v-btn
    >
  </v-expansion-panel-content>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import WorkoutTimeResult from '@/components/molecules/results/WorkoutTimeResult.vue'
import PlankResult, {
  initResult
} from '@/components/molecules/results/weight-trainings/PlankResult.vue'
import MemoField from '@/components/molecules/fields/MemoField.vue'
import { WorkoutBySecondsPanelContentProps } from '@/types'

export default createComponent<WorkoutBySecondsPanelContentProps, {}>({
  components: { WorkoutTimeResult, PlankResult, MemoField },
  props: {
    index: Number,
    workout: Object,
    finish: Function
  },
  setup({ index, workout, finish }) {
    const state = reactive({
      results: workout.results.length ? workout.results : [initResult()],
      memo: workout.memo
    })

    const secondsChange = (index: number, value: number) => {
      state.results[index].seconds = value
    }

    const setChange = (index: number, value: number) => {
      state.results[index].set = value
    }

    const deleteResult = (index: number) => {
      state.results = state.results.filter((_, i) => i !== index)
    }

    const addResult = () => {
      state.results.push(initResult())
    }

    const workoutFinish = () => {
      finish(index, state.results, state.memo)
    }

    return {
      state,
      secondsChange,
      setChange,
      deleteResult,
      addResult,
      workoutFinish
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../workout-contents';
</style>
