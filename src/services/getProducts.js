function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(
        "https://github.com/comparo-ago/Cabins/blob/main/public/data.json"
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
