const supertest = require('supertest');  // also tried

describe('Dashboard Controller', () => {

  describe('/subject', () => {

    before(() => {
      this._url = '/api/v1/entrance/login';

      return supertest(sails.hooks.http.app).get('/login')
        .then(getRes => {
          const reTokenCapture = /_csrf:\s*unescape\('([^']+)'\)/;
          const foundToken = reTokenCapture.exec(getRes.text);
          this._csrf = sails.config.security.csrf ? foundToken[1] : '';
          this._cookie = getRes.headers['set-cookie'].join('; ');
        });

    });

    it('should accept the session ID & CSRF token procured by GET /login', () => {
      return supertest(sails.hooks.http.app)
        .put(this._url)
        .set('Cookie', this._cookie)
        .set('X-CSRF-Token', this._csrf)
        .send({
          emailAddress: 'darren@gmail.com',
          password: 'dashdy',
        })
        .expect(200)
    });

    it('should return 200', () => {
      return supertest(sails.hooks.http.app)
        .get('/subject')
        .set('Cookie', this._cookie)
        .set('X-CSRF-Token', this._csrf)
        .expect(200);
    });

    it('should reject as no crsf', () => {
      return supertest(sails.hooks.http.app)
        .get('/subject')
        .expect(401);
    });



  });
});
