async function getPopulations(apiKey, prefCode) {
  const response = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' + prefCode,
    {
      headers: {
        'X-API-KEY': apiKey,
      },
    },
  );

  const json = await response.json();

  // JSON から、'result' -> 'data' -> 0 番目 -> 'data' と辿った部分を返す
  return json.result.data[0].data;
}
