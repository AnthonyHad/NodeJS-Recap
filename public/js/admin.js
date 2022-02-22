// this code will run in the client
const deleteProduct = (btn) => {
  const prodId = btn.ParentNode.querySelector('[name=productId]').value;
  const csrf = btn.ParentNode.querySelector('[name=_csrf]').value;

  const productElement = btn.closest('article');
  //can be used to send data as well
  fetch('/admin/product/' + prodId, {
    method: 'DELETE',
    headers: {
      'csrf-token': csrf,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      productElement.parentNode.removeChild(productElement);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
