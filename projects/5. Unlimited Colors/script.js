const randomColor = () => {
    const hex = '1234567890ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let intervelID;
  const startChangingcolor = () => {
    if (!intervelID) {
      intervelID = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
      }, 100);
    }
  };
  
  const stopChangingcolor = () => {
    clearInterval(intervelID);
    intervelID = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingcolor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingcolor);
  