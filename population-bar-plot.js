const PopulationBarPlot = {
  props: [
    'api',        // API キー (Read-only State)
    'prefecture', // 県番号 (Read-only State)
  ],

  data() {
    return {
      populations: [],  // 人口の配列 (State)
      maxPopulation: 1, // 人口の最大値 (State)
      year: '',
      value: '',
    };
  },

  /* html */
  template: `
  <div>{{ year }}{{ value }}</div>
  <button v-on:click="updateGraph">更新</button>
  <div class="graph">
    <div
      v-for="population in populations"
      class="bar"
      v-bind:style="'height: ' + population * 200 / maxPopulation + 'px;'"
    ></div>
  </div>
  `,

  methods: {
    // 人口の配列 (State) を、RESAS API を用いて更新する関数
    async updateGraph() {
      if (this.prefecture !== null) {
        const data = await getPopulations(this.api, this.prefecture, this.year, this.value);

        this.populations = data.map((obj) => obj.value);
        this.maxPopulation = Math.max(... data.map((obj) => obj.value));
        ye = ye['result']['data']['data']['0']['year'];
        this.year = ye;
        va = va['result']['data']['data']['0']['value'];
        this.value = va;
      } else {
        this.populations = [];
      }
    },
  },
};
