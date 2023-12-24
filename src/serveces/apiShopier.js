export async function getAllProducts() {
  try {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getALLCategories() {}
