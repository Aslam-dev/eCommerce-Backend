import app, {url, port} from './app';

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${url}`)
})
