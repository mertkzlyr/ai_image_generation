function onSubmit(e) {
  e.preventDefault();

  document.querySelector('.msg').textContent = '';
  document.querySelector('#image').src = '';

  const prompt = document.querySelector('#prompt').value;

  if (prompt === '') {
    alert('Please add some text');
    return;
  }

  editImageRequest(prompt);
}

async function editImageRequest(prompt) {
  try {
    showSpinner();

    const response = await fetch('/openai/editimage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      removeSpinner();
      const errorData = await response.json();
      throw new Error(errorData.error || 'That image could not be edited');
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
