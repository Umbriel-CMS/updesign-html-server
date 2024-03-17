window.addEventListener('message', (event) => {
  if (event.origin !== "http://127.0.0.1:3002") {
    return;
  }

  if (event.data.type === 'UPDATE_ITEM') {
    const payload = event.data.payload;
    console.log(payload, 'payload from next client')
    const element = document.getElementById(`menu-item-${payload.index}`);
    if (element && payload.field === 'title') {
      element.textContent = payload.value;
    }
  }
});