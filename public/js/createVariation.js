function onSubmit(e) {
  e.preventDefault();

  document.querySelector('.msg').textContent = '';
  document.querySelector('#image').src = '';

  createVariationRequest();
}

async function createVariationRequest() {
  try {
    showSpinner();

    const response = await fetch('/openai/createVariation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      removeSpinner();
      throw new Error('That image could not be generated');
    }

    const data = await response.json();
    const imageUrl = data.data[0].url;

    document.querySelector('#image').src = imageUrl;

    removeSpinner();
  } catch (error) {
    console.log(error);
    document.querySelector('.msg').textContent = error.message;
  }
}

function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

function removeSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);
