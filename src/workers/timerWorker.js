self.onmessage = function (event) {
  console.log('WORKER recebeu: ', event.data);

  switch (event.data) {
    case 'FAVOR': {
      console.log('WORKER recebeu: ', event.data);
      self.postMessage('Ok! Vou fazer o favor.');
      break;
    }

    case 'FECHAR': {
      console.log('WORKER recebeu: ', event.data);
      self.postMessage('Ok! Vou fechar!');
      self.close();
      break;
    }

    case 'ABRIR': {
      console.log('WORKER recebeu: ', event.data);
      self.postMessage('Ok! Vou abrir!');
      break;
    }

    default: {
      console.log('Desculpa, eu não conseguir entender!');
    }
  }
};
