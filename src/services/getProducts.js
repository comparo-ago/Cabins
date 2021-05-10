function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(
        "https://raw.githubusercontent.com/comparo-ago/Cabins/main/src/assets/data.json"
      )
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    }, 2000);
  });
}

module.exports = {
  getProducts,
};
