function getSingleProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(
        "https://raw.githubusercontent.com/comparo-ago/Cabins/main/public/data.json"
      )
        .then((response) => response.json())
        .then((data) => data.find((item) => item.id == id))
        .then((foundItem) => resolve(foundItem))

        .catch((err) => reject(err));
    }, 2000);
  });
}

module.exports = {
  getSingleProduct,
};
