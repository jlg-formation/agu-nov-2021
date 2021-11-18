import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('should add ... to a long string', () => {
    const pipe = new EllipsisPipe();
    const string = '' + Math.floor(Math.random() * 1e24);
    const result = pipe.transform(string);
    expect(result).toBe(string.substr(0, 10) + '...');
  });

  it('should add ... to a long string > 15', () => {
    const pipe = new EllipsisPipe();
    const string = '' + Math.floor(Math.random() * 1e24);
    const result = pipe.transform(string, 15);
    expect(result).toBe(string.substr(0, 15) + '...');
  });

  it('should return the same string if the string is short', () => {
    const pipe = new EllipsisPipe();
    const string = '' + Math.floor(Math.random() * 1e5);
    const result = pipe.transform(string);
    expect(result).toBe(string.substr(0, 10));
  });

  it('should return the same string if the string is short < 15', () => {
    const pipe = new EllipsisPipe();
    const string = '' + Math.floor(Math.random() * 1e12);
    const result = pipe.transform(string, 15);
    expect(result).toBe(string.substr(0, 15));
  });
});
