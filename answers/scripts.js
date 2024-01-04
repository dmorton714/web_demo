const changeText = () => {
    const h1Element = document.getElementById('clickable');
    
    if (h1Element.innerHTML === 'Click me!') {
      h1Element.innerHTML = 'Text Changed!';
    } else {
      h1Element.innerHTML = 'Click me!';
    }
  };
