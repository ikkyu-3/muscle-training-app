import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import BaseResult from './BaseResult.vue'
import WorkoutTimeResult from './WorkoutTimeResult.vue'

// workout result
import BenchPressResult, {
  initResult as benchPressInitResult
} from './weight-machine-trainings/BenchPressResult.vue'
import ChestPressResult, {
  initResult as chestPressInitResult
} from './weight-machine-trainings/ChestPressResult.vue'
import CrunchResult, {
  initResult as crunchInitResult
} from './weight-trainings/CrunchResult.vue'
import LatPulldownResult, {
  initResult as latPulldownInitResult
} from './weight-machine-trainings/LatPulldownResult.vue'
import LegPressResult, {
  initResult as legPressInitResult
} from './weight-machine-trainings/LegPressResult.vue'
import LegCurlResult, {
  initResult as legCurlInitResult
} from './weight-machine-trainings/LegCurlResult.vue'
import LegExtensionResult, {
  initResult as legExtensionInitResult
} from './weight-machine-trainings/LegExtensionResult.vue'
import LegRaiseResult, {
  initResult as legRaiseInitResult
} from './weight-trainings/LegRaiseResult.vue'
import SitUpResult, {
  initResult as sitUpInitResult
} from './weight-trainings/SitUpResult.vue'
import BackExtensionResult, {
  initResult as backExtensionInitResult
} from './weight-trainings/BackExtensionResult.vue'

storiesOf('molecules.results', module).add('BaseResult', () => ({
  components: { BaseResult },
  template: `
    <base-result :delete-result="action" style="height: 200px;" >Base Result</base-result>
  `,
  methods: {
    action: action('clicked')
  }
}))

storiesOf('molecules.results', module).add('WorkoutTimeResult', () => ({
  components: { WorkoutTimeResult },
  template: `
    <workout-time-result :startTime="startTime" :endTime="endTime" />
  `,
  data: () => ({
    startTime: '2019-01-01T00:00:00.000Z',
    endTime: '2019-01-01T00:01:30.000Z'
  })
}))

storiesOf('molecules.results', module).add('WorkoutResult', () => ({
  components: {
    BenchPressResult,
    ChestPressResult,
    CrunchResult,
    LatPulldownResult,
    LegPressResult,
    LegCurlResult,
    LegExtensionResult,
    LegRaiseResult,
    SitUpResult,
    BackExtensionResult
  },
  template: `
    <article>
      <h1>WorkoutResult</h1>
      <section>
        <h2>BenchPressResult</h2>
        <bench-press-result :index="index" :result="benchPressResult" :delete-result="action"/>
      </section>
      <section>
        <h2>ChestPressResult</h2>
        <chest-press-result :index="index" :result="chestPressResult" :delete-result="action"/>
      </section>
      <section>
        <h2>CrunchResult</h2>
        <crunch-result :index="index" :result="crunchResult" :delete-result="action"/>
      </section>
      <section>
        <h2>LatPulldownResult</h2>
        <lat-pulldown-result :index="index" :result="latPulldownResult" :delete-result="action"/>
      </section>
      <section>
        <h2>LegPressResult</h2>
        <leg-press-result :index="index" :result="legPressResult" :delete-result="action"/>
      </section>
      <section>
        <h2>LegCurlResult</h2>
        <leg-curl-result :index="index" :result="legCurlResult" :delete-result="action"/>
      </section>
      <section>
        <h2>LegExtensionResult</h2>
        <leg-extension-result :index="index" :result="legExtensionResult" :delete-result="action"/>
      </section>
      <section>
        <h2>LegRaiseResult</h2>
        <leg-raise-result :index="index" :result="legRaiseResult" :delete-result="action"/>
      </section>
      <section>
        <h2>SitUpResult</h2>
        <sit-up-result :index="index" :result="sitUpResult" :delete-result="action"/>
      </section>
      <section>
        <h2>BackExtension</h2>
        <back-extension-result :index="index" :result="backExtensionResult" :delete-result="action"/>
      </section>
    </article>
  `,
  data: () => ({
    index: 0,
    benchPressResult: benchPressInitResult(),
    chestPressResult: chestPressInitResult(),
    crunchResult: crunchInitResult(),
    latPulldownResult: latPulldownInitResult(),
    legPressResult: legPressInitResult(),
    legCurlResult: legCurlInitResult(),
    legExtensionResult: legExtensionInitResult(),
    legRaiseResult: legRaiseInitResult(),
    sitUpResult: sitUpInitResult(),
    backExtensionResult: backExtensionInitResult()
  }),
  methods: {
    action: action('clicked')
  }
}))
