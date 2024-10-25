import express, { Express, Request, Response } from 'express';
import path from 'path';

export const createApp = (): Express => {
  const app = express();

  // Serve static files from the images directory at /img URL path
  app.use('/img', express.static(path.join(__dirname, '../images')));

  // Root route
  app.get('/', (_req: Request, res: Response) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Image Page</title>
          <style>
            body {
              margin: 0;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            img {
              max-width: 100%;
              height: auto;
            }
          </style>
        </head>
        <body>
          <img src="/img/ak.png" alt="Centered Image">
        </body>
      </html>
    `);
  });

  // Hello route
  app.get('/hello', (_req: Request, res: Response) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello World</title>
          <style>
            body {
              margin: 0;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              font-family: Arial, sans-serif;
              font-size: 3rem;
            }
          </style>
        </head>
        <body>
          <h1>Hello World</h1>
        </body>
      </html>
    `);
  });

  return app;
};
