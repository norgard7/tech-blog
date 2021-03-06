const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const newPost = document.querySelector('#content').value.trim();
    
    
    
    if (title && newPost) {
      const response = await fetch(`/api/posts/`, {
        method: 'POST',
        body: JSON.stringify({ title, newPost}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create new post');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
    
  