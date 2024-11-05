import request from 'supertest';
import { createApp } from '../src/app';

describe('Express App', () => {
  const app = createApp();

  describe('GET /', () => {
    it('should return HTML with centered image', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.text).toContain('<!DOCTYPE html>');
      expect(response.text).toContain('<img src="/img/ak.png"');
      expect(response.text).toContain('display: flex');
      expect(response.text).toContain('justify-content: center');
    });
  });

  describe('GET /hello/fred', () => {
    it('should return HTML with centered Hello World text', async () => {
      const response = await request(app).get('/hello/fred');

      expect(response.status).toBe(200);
      expect(response.text).toContain('<!DOCTYPE html>');
      expect(response.text).toContain('<h1>Hello fred</h1>');
      expect(response.text).toContain('display: flex');
      expect(response.text).toContain('justify-content: center');
      expect(response.text).toContain('font-size: 3rem');
    });
  });

  describe('GET /hello', () => {
    it('should return HTML with centered Hello World text', async () => {
      const response = await request(app).get('/hello');

      expect(response.status).toBe(200);
      expect(response.text).toContain('<!DOCTYPE html>');
      expect(response.text).toContain('<h1>Hello World</h1>');
      expect(response.text).toContain('display: flex');
      expect(response.text).toContain('justify-content: center');
      expect(response.text).toContain('font-size: 3rem');
    });
  });

  describe('GET /img/', () => {
    it('should return an image from the images directory', async () => {
      const response = await request(app).get('/img/ak.png');

      expect(response.status).toBe(200);
    });
  });
});
