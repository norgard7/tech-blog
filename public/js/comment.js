const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment').value.trim();
  const post_id = window.location.toString().split('/')[window.location.toString().split('/').length-1];
  
  
  if (comment) {
    const response = await fetch(`/api/posts/comment`, {
      method: 'POST',
      body: JSON.stringify({ comment, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
  
