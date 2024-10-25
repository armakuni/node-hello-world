import { createApp } from './app';

const PORT = 8080;
const app = createApp();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
