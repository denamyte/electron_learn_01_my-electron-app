const information = document.getElementById('info')

information.innerText = `This app is using Chrome (v${versions.chrome()}),` +
  ` Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
  const response = await versions.ping()
  const p = document.getElementById('main_answer')
  p.innerText = response
}

func()