function getSingleProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(
        "https://github.com/comparo-ago/Cabins/blob/main/public/data.json"
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
