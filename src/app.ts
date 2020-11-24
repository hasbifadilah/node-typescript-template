import express, { Express } from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import bearerToken from 'express-bearer-token';

export default class App {
  private app: Express;

  private environment: string;

  private port: string | number;

  constructor() {
    this.app = express();
    this.environment = process.env.NODE_ENV || 'development';
    this.port = process.env.PORT || 7070;
  }

  private setDefaultConfig(): void {
    this.app.set('etag', false);
    this.app.use(cors());
    this.app.use(
      logger('dev', {
        skip: (req) => {
          return req.url.includes('images');
        },
      }),
    );
    this.app.use(bodyParser.json({ limit: '500mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
    this.app.use(express.json({ limit: '500mb' }));
    this.app.use(express.static('public'));
    this.app.use(bearerToken());
    this.app.use((req, res, next) => {
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, Accept, Accept-Version, Authorization, Content-Length, Cache-Control, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token',
      );
      next();
    });
  }

  private assignRouters(): void {
    this.app.get('/', (req, res) => {
      res.status(200).send(`Welcome to Purwadhika API || Running in ${this.environment} mode`);
    });
  }

  initialize(): void {
    this.setDefaultConfig();
    this.assignRouters();

    // Global error handler
    this.app.use((err, req, res, next) => {
      console.error(err);
      const { statusCode, message } = err;
      return res.status(statusCode || 500).json({
        message: "There's an error on the server. Please contact the administrator.",
        error: message,
      });
    });

    this.app.listen(this.port, () =>
      console.log(`App listening on port ${this.port}! Running in ${this.environment} mode`),
    );
  }
}
