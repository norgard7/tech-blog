const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
    const date = format_date();
    const user = req.session.user_name;
  
    if (comment) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment_content, post_id, user, date }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create comment');
      }
    }
  };
  

  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  
