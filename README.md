2022『フロントエンド・プログラミング』期末レポート (Vue.js)
===============================================================================

## 1. 人口グラフの改良 (30 点)

人口グラフに **人口** と **年度** の値が表示されるようにしてください。
この際、ユーザーにとってグラフが見やすくなるように HTML や CSS は適宜調整してください。

**実装のヒント：**

- `PopulationBarPlot` Component しか編集する必要はありません
- `getPopulations` 関数は、次の Object を複数、配列で返しています  
  ```
  {
    year: <年度の値>,
    value: <人口の値>
  }
  ```
- Vue.js 公式リファレンス[「条件分岐とループ」](https://v3.ja.vuejs.org/guide/introduction.html#%E6%9D%A1%E4%BB%B6%E5%88%86%E5%B2%90%E3%81%A8%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A)のプログラムも参考にできます


## 2. 都道府県選択 UI の改良 (30 点)

都道府県のチェックボックスを、ラジオボタンに変更してください。
ただし、Props から初期選択されている都道府県を指定できるようにしてください。

```html
<prefecture-selector
  v-bind:default-prefecture="prefecture"
  v-bind:set-prefecture="setPrefecture"
></prefecture-selector>
```

**実装のヒント：**

- ラジオボタンの [仕様](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/radio) を参考にしてください
- Vue.js 公式リファレンス[「コンポーネントによる構成」](https://v3.ja.vuejs.org/guide/introduction.html#%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E3%82%88%E3%82%8B%E6%A7%8B%E6%88%90)を参考にしてください
- ラジオボタンには `checked` 属性が存在し、条件式を `v-bind` することで選択状態を制御することができます
