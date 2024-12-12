import express, { Express, Request, Response } from 'express';
import path from 'path';
import { homePageContent } from './homePageContent';

export const createApp = (): Express => {
  const app = express();

  // Serve static files from the images directory at /img URL path
  app.use('/img', express.static(path.join(__dirname, '../images')));

  // Root route
  app.get('/', (_req: Request, res: Response) => {
    res.send(homePageContent());
  });

  // Hello route
  app.get('/hello', (_req: Request, res: Response) => {
    res.send(helloContent());
  });

  return app;
};
function helloContent(): any {
  return `
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
    `;
}
