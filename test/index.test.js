import { expect, BASE_URL, server } from './setup';

describe('Index page test', () => {
  it('gets base URL', (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Welcome to my Express API Hello World.'
        );
        done();
      });
  });
});
